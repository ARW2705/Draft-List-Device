class Hardware {
  constructor() {
    if (Hardware._instance) return Hardware._instance
    Hardware._instance = this
    this.id = 'test-hardware-id'
  }

  getId() {
    if (!this.id) {
      this.id = this._getHardwareId()
    }
    return this.id
  }

  _getHardwareId() {
    // TODO get serial number from device filesystem /proc/cpuinfo
  }
}

const hardware = new Hardware()

export default hardware
