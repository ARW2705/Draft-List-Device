import React from 'react'

import './Beverage.css'


function Beverage(props) {
  const { name, source, style, abv, ibu, srm } = props.beverage

  return (
    <div className='Beverage z-index-10'>
      <p className='name'>{ name }</p>
      <div>
        <p className='source'>
          { style } • { source }
        </p>
        <p className='values'>
          <span>ABV { abv }%</span>
          { ibu && <span>{ ibu } IBU</span> }
          { srm && <span>{ srm } SRM</span> }
        </p>
      </div>
    </div>
  )
}

export default Beverage
