import React, { useState, useEffect } from 'react'

import getImageURL from '../../services/HttpClient/helpers/image-url'

import './BackgroundBanner.css'


function BackgroundBanner({ imageURL }) {
  const backgroundURL = getImageURL(imageURL)

  return (
    <img
      className='BackgroundBanner'
      src={ backgroundURL }
      alt='background banner'
    />
  )

}

export default BackgroundBanner
