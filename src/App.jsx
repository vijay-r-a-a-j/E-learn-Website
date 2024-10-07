import React from 'react'
import Home from './components/Home/Home'
import Vision from './components/Vision/Vision'
import OurHistory from './components/OurHistory/OurHistory'
import About from './components/About/About'
import Subscribe from './components/Subscribe/Subscribe'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='font-montserrat flex-wrap'>
      <Home/>
      <Vision/>
      <OurHistory/>
      <About/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default App
