import React from 'react'

import DotsLoader from '../Dots/DotsLoader'

import './DeviceLoader.css'


function DeviceLoader() {
  return (
    <h1 className="DeviceLoader">
      Loading Device
      <div className="device-dots">
        <DotsLoader />
      </div>
    </h1>
  )
}

export default DeviceLoader
