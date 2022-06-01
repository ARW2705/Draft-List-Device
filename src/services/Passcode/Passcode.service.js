class Passcode {
  static generatePasscode() {
    const alphanumericChars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let passcode = ''
    for (let i = 0; i < 4; ++i) {
      passcode += alphanumericChars[Math.floor(Math.random() * (alphanumericChars.length - 1))]
    }
    return passcode
  }
}

export default Passcode.generatePasscode
