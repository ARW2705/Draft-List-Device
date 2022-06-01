import React from 'react'

import { API_VERSION } from '../../shared/constants/api-version'
import { APP_VERSION } from '../../shared/constants/app-version'

import './Footer.css'


function Footer() {
  return (
    <footer className='Footer'>
      <span>App Version { APP_VERSION }</span>
      <span>API Version { API_VERSION }</span>
    </footer>
  )
}

export default Footer
