import React from 'react'

import './Title.css'


function Title(props) {
  const { title } = props

  return (
    <h1 className='Title'>
      { title }
    </h1>
  )
}

export default Title
