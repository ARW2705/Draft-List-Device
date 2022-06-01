import React, { Component } from 'react'

import buildContainer from './buildContainer'

import './Container.css'


class CornyKeg extends Component {
  constructor(props) {
    super(props)
    this.state = { ...props }
    this.state.baseY = 93
    this.state.baseHeight = 80
    this.state.fillPath = this.buildPath()
  }

  componentDidUpdate(prevProps) {
    const newQuantity = this.props.quantity
    if (prevProps.quantity !== newQuantity) {
      this.setState({ fillPath: this.buildPath(newQuantity) })
    }
  }

  buildPath(newQuantity) {
    const { baseHeight, baseY, quantity, capacity } = this.state
    const percentRemaining = (newQuantity === undefined ? quantity : newQuantity) / capacity
    let newPath = ''
    if (percentRemaining > 0.05) {
      const newHeight = baseHeight * percentRemaining
      const newY = baseY - newHeight

      let curveOffset = -2
      if (percentRemaining > 0.75) {
        curveOffset = -1
      } else if (percentRemaining > 0.5) {
        curveOffset = 0
      } else if (percentRemaining > 0.25) {
        curveOffset = 1
      } else {
        curveOffset = 1.5
      }

      newPath = `
        M 1.5 ${newY}
        V ${baseY}
        C 11.5 ${baseY + 3}, 28.5 ${baseY + 3}, 38.5 ${baseY}
        V ${newY}
        C 23 ${newY + curveOffset}, 18 ${newY + curveOffset}, 1.5 ${newY}
      `
    }

    return newPath
  }

  render() {
    return (
      <svg
        className="Container z-index-10"
        viewBox="0 0 40 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ShineGradient">
            <stop
              offset="0%"
              style={ { stopColor: "white", stopOpacity: 0.5 } }
            />
            <stop
              offset="30%"
              style={ { stopColor: "white", stopOpacity: 0 } }
            />
            <stop
              offset="70%"
              style={ { stopColor: "white", stopOpacity: 0.1 } }
            />
            <stop
              offset="100%"
              style={ { stopColor: "white", stopOpacity: 0.85 } }
            />
          </linearGradient>
        </defs>
        <path
          d="
            M 1 7
            V 95
            C 1 97, 1 97.5, 2 97.5
            C 11 99.5, 29 99.5, 38 97.5
            C 39 97.5, 39 97, 39 95
            V 7
            C 36 2, 24 1.5, 24 2
            L 23.75 8
            H 16.25
            L 16 2
            C 18 1.5, 1 2, 1 7
          "
          fill="#c4ddff"
          stroke="#523e61"
          strokeWidth={1.1}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d={ this.state.fillPath }
          fill={ this.state.contentColor }
        />
        <path
          d="
            M 1 20
            C 11 18, 29 18, 39 20
            M 1 90
            C 11 92.5, 29 92.5, 39 90
          "
          fill="transparent"
          stroke="#403a59"
          strokeWidth={0.8}
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="
            M 1.5 7
            V 96.5
            C 11 98.5, 29 98.5, 38.5 96.5
            V 7
            M 1.5 7
            C 3 0, 34 0, 38.5 7
          "
          fill="url(#ShineGradient)"
        />
      </svg>
    )
  }
}

export default buildContainer(CornyKeg)
