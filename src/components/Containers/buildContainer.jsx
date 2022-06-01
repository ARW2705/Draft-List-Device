import React, { Component } from 'react'


function buildContainer(ContainerComponent) {
  class Container extends Component {
    constructor(props) {
      super(props)
      this.state = {
        baseY: 0,
        baseHeight: 0,
        fillPath: '',
      }
    }

    render() {
      return <ContainerComponent {...this.props} {...this.state} />
    }
  }

  return Container
}

export default buildContainer
