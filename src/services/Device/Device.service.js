import { BehaviorSubject } from 'rxjs'
import httpClient from '../HttpClient/HttpClient.service'
import registrationService from '../Registration/Registration.service'


class Device {
  constructor() {
    if (Device._instance) return Device._instance
    console.log(process.env)
    Device._instance = this
    this.device$ = new BehaviorSubject(null)
  }

  getDevice() {
    return this.device$
  }

  init() {
    if (this._isInitializing) return
    this._isInitializing = true
    const device = JSON.parse(localStorage.getItem('device'))
    if (device) {
      console.log('found device')
      this.device$.next(device)
      this.pollDeviceChanges()
    } else {
      console.log('device not found, register new device')
      registrationService.register()
        .then(device => {
          console.log('device registration complete', device)
          this.device$.next(device)
          this.pollDeviceChanges()
          this.storeDevice(device)
        })
        .catch(error => {
          console.error('error getting device', error)
          // TODO prompt restart
        })
    }
  }

  pollDeviceChanges() {
    setInterval(() => {
      httpClient.get(`${this.device$.value._id}`)
        .then(device => {
          console.log('refresh device', device)
          this.device$.next(device)
          this.storeDevice(device)
        })
        .catch(error => {
          console.log(error)
        })
    }, 60 * 1000) // poll in 1 minute intervals
  }

  storeDevice(device) {
    localStorage.setItem('device', JSON.stringify(device))
  }
}

const deviceService = new Device()

export default deviceService
