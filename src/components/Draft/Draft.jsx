import React, { Component } from 'react'

import selectContainer from '../Containers/selectContainer'

import BackgroundBanner from '../BackgroundBanner/BackgroundBanner'
import Beverage from '../Beverage/Beverage'
import CornyKeg from '../Containers/CornyKeg'
import PintGlass from '../Containers/PintGlass'

import './Draft.css'


class Draft extends Component {
  constructor(props) {
    super(props)
    const draft = { ...props.draft }
    const { beverage, container } = draft
    const { imageURL } = beverage
    const { containerInfo, quantity, contentColor } = container
    const { type, capacity } = containerInfo

    this.state = {
      beverage,
      imageURL,
      type,
      quantity,
      capacity,
      contentColor
    }
    this.selectSVGComponent(type)
  }

  componentDidUpdate(prevProps) {
    if (this.props.draft.container.quantity !== prevProps.draft.container.quantity) {
      this.setState({ quantity: this.props.draft.container.quantity })
    }
  }

  selectSVGComponent() {
    let SVGComponent
    switch (this.state.type) {
      case 'corny-keg':
        return (
          <CornyKeg
            quantity={ this.state.quantity }
            capacity={ this.state.capacity }
            contentColor={ this.state.contentColor }
          />
        )
        break
      case 'pint-glass':
        return (
          <PintGlass
            quantity={ this.state.quantity }
            capacity={ this.state.capacity }
            contentColor={ this.state.contentColor }
          />
        )
        break
      default:
        throw new Error(`Invalid container type: ${ this.state.type }`)
    }
  }

  render() {
    return (
      <section className='Draft'>
        <BackgroundBanner imageURL={ this.state.imageURL } />
        <Beverage beverage={ this.state.beverage } />
        { this.selectSVGComponent() }
      </section>
    )
  }
}

export default Draft
