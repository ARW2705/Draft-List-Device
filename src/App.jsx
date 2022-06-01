import React from 'react'

import deviceService from './services/Device/Device.service'

import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

import './App.css';


function App() {
  deviceService.init()

  return (
    <div className='App'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
