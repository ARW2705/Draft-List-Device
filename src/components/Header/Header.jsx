import React, { useEffect, useState } from 'react'

import deviceService from '../../services/Device/Device.service'

import Title from '../Title/Title'
import Locale from '../Locale/Locale'
import Datetime from '../Datetime/Datetime'
import DotsLoader from '../Loaders/Dots/DotsLoader'

import './Header.css'


function Header() {
  const [ headerData, setHeaderData ] = useState({
    title: null,
    locale: null
  })

  useEffect(() => {
    console.log('header use effect')
    const subscription = deviceService.getDevice()
      .subscribe(
        device => {
          if (device) {
            const { name, title, locale } = device
            const { currentTitle, currentLocale } = headerData

            const update = {}
            if (title) {
              if (title !== currentTitle) Object.assign(update, { title })
            } else {
              if (name !== currentTitle) Object.assign(update, { title: name })
            }
            const localMsg = `${locale.city}, ${locale.region}`
            if (localMsg !== currentLocale) Object.assign(update, { locale: localMsg })

            if (Object.keys(update).length) {
              setHeaderData(update)
            }
          }
        }
      )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <header className='Header'>
      {
        headerData.title
        ? <Title title={ headerData.title } />
        : <div className="loader-wrapper"><DotsLoader /></div>
      }
      {
        headerData.locale
        ? <Locale locale={ headerData.locale } />
        : <DotsLoader />
      }
      <Datetime />
    </header>
  )
}

export default Header
