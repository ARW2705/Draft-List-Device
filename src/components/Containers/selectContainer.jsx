import React from 'react'

import CornyKeg from '../Containers/CornyKeg'
import PintGlass from '../Containers/PintGlass'


function selectContainer(type, content) {
  switch (type) {
    case 'corny-keg':
      return <CornyKeg content={ content } />
    case 'pint-glass':
      return <PintGlass content={ content } />
    default:
      throw new Error(`Invalid container type: ${ type }`)
  }
}

export default selectContainer
