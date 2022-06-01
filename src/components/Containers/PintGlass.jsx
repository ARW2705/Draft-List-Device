import React, { Component } from 'react'

import buildContainer from './buildContainer'

import './Container.css'


class PintGlass extends Component {
  constructor(props) {
    super(props)
    // TODO add initial state once placeholder svg is replaced with intended svg
  }

  componentDidMount() {
    this.setPath()
  }

  setPath() {
    // TODO add path logic once placeholder svg is replaced with intended svg
  }

  updateContent(percentRemaining) {
    this.setState({ percentRemaining })
    this.setPath()
  }

  render() {
    return (
      <svg
        className="Container z-index-10"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 203.896 203.896"
        style={{
          enableBackground: "new 0 0 203.896 203.896",
        }}
        xmlSpace="preserve"
      >
        <path d="M145.02,45.166l-0.133-10.729c-0.001-0.034-0.001-0.067-0.002-0.101c-0.379-14.681-1.399-24.293-1.82-27.745 C142.606,2.829,139.411,0,135.62,0H68.285c-3.791,0-6.985,2.829-7.445,6.591c-0.421,3.45-1.442,13.063-1.822,27.857l-0.142,10.825 c-0.009,22.584,1.729,57.41,10.063,95.072c6.887,31.141,4.917,47.3,3.129,54.16c-0.585,2.248-0.097,4.64,1.323,6.478 c1.42,1.837,3.612,2.913,5.935,2.913h45.252c2.323,0,4.514-1.076,5.935-2.914c1.42-1.838,1.909-4.23,1.323-6.478 c-1.789-6.864-3.761-23.027,3.131-54.16C143.3,102.668,145.033,67.838,145.02,45.166z M74.015,34.741 c0.217-8.449,0.65-15.087,1.047-19.741h53.781c0.396,4.644,0.828,11.261,1.046,19.675l0.131,10.588 c0.013,21.834-1.66,55.492-9.7,91.841c-2.802,12.657-4.262,23.206-4.858,31.98H88.439c-0.595-8.773-2.055-19.322-4.854-31.98 c-8.04-36.337-9.717-69.992-9.709-91.73L74.015,34.741z M88.243,188.896c0.161-1.496,0.287-3.104,0.378-4.811h26.661 c0.091,1.707,0.217,3.316,0.378,4.811H88.243z" />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
        <g />
      </svg>
    )
  }
}

export default buildContainer(PintGlass)
