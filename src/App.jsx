import React from 'react'
import Header from './Components/Header'
import Home from './Components/Home'
import Foods from './Components/Foods'
import About from './Components/About'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div className=''>
      <Header />
      <Home />
      <Foods />
      <About />
      <Contact />
      <Toaster />
    </div>
  )
}

export default App
