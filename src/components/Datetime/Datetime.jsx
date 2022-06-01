import React, { Component } from 'react'
import Moment from 'moment'

import './Datetime.css'


class Datetime extends Component {
  constructor(props) {
    super(props)
    const format = props.format ? props.format : 'MMM Do, h:mm a'
    this.state = {
      format,
      now: Moment().format(format)
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalId)
  }

  render() {
    const { now } = this.state
    return (
      <time dateTime={ now }>
        { now }
      </time>
    )
  }

  tick() {
    this.setState({ now: Moment().format(this.state.format) })
  }
}

export default Datetime
