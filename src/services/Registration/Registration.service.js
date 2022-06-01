import events from '../Events/Events.service'
import httpClient from '../HttpClient/HttpClient.service'
import hardwareService from '../Hardware/Hardware.service'
import generatePasscode from '../Passcode/Passcode.service'
import tokenService from '../Token/Token.service'


class Registration {
  constructor() {
    if (Registration._instance) return Registration._instance
    Registration._instance = this
    this.confirmationTTL = 5 * 60 * 1000 // confirmation expires after 5 minutes
    this.retryIntervalId = null
  }

  getPasscode() {
    let passcode = generatePasscode()
    events.emit('register', { passcode })
    return passcode
  }

  register() {
    return new Promise((resolve, reject) => {
      let passcode = this.getPasscode()
      this.confirmationStart = Date.now()
      this.intervalId = setInterval(() => {
        console.log('using passcode', passcode)
        this._confirmRegistration(passcode)
          .then(device => {
            if (device) {
              console.log('confirmed device', device)
              resolve(device)
            } else {
              if (Date.now() - this.confirmationStart > this.confirmationTTL) {
                console.log('Registration time limit exceeded')
                passcode = this.getPasscode()
                this.confirmationStart = Date.now()
              }
            }
          })
          .catch(error => reject(error))
      }, 10 * 1000) // retry every 10s
    })
    .finally(() => { console.log('clearing interval'); clearInterval(this.intervalId); })
  }

  _confirmRegistration(passcode) {
    return httpClient.post('register', { passcode, hardwareId: hardwareService.getId() })
      .then(response => {
        console.log('response', response)
        if (response.success) {
          const { device, accessToken, refreshToken } = response
          tokenService.setToken('accessToken', accessToken)
          tokenService.setToken('refreshToken', refreshToken)

          return device
        } else {
          console.log(`Registration attempt unsuccessful: ${response.reason}; retrying...`)
        }
        return null
      })
      .catch(error => {
        console.error(error)
        Promise.reject(error)
      })
    }
}

const registration = new Registration()

export default registration
