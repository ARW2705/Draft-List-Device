import React, { useState, useEffect } from 'react'

import deviceService from '../../services/Device/Device.service'

import Draft from '../Draft/Draft'
import DeviceLoader from '../Loaders/Device/DeviceLoader'

import './Main.css'


function Main() {
  const [ mainData, setMainData ] = useState({
    drafts: [],
    components: <DeviceLoader />,
    deviceStatus: 'loading'
  })

  useEffect(() => {
    const subscription = deviceService.getDevice()
      .subscribe(
        device => {
          if (device) {
            const { draftList } = device
            const { drafts } = mainData
            if (JSON.stringify(draftList) !== JSON.stringify(drafts)) {
              setMainData({
                drafts: draftList,
                components: draftList.map(draft => <Draft key={ draft._id } draft={ draft } />),
                deviceStatus: 'loaded'
              })
            }
          }
        }
      )

    return () => subscription.unsubscribe()
  }, [])

  return (
    <section className='Main'>
      { mainData.components }
    </section>
  )
}

export default Main
