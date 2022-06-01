import { Subject } from 'rxjs'

class Events {
  constructor() {
    if (Events._instance) return Events._instance
    Events._instance = this
    this.events = {}
  }

  register(eventName) {
    if (!this.events[eventName]) {
      this.events[eventName] = new Subject()
    }
    return this.events[eventName]
  }

  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].next(data)
    }
  }
}

const events = new Events()

export default events
