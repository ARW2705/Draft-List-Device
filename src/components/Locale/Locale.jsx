import React from 'react'

import './Locale.css'


function Locale(props) {
  const { locale } = props

  return (
    <div className='Locale'>
      { locale }
    </div>
  )
}

export default Locale
