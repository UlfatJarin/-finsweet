import { useState } from 'react'
import './App.css'
import Home from './component/Home'
import Navbar from './component/Layer/Navbar'
import Footer from './component/Footer'

function App() {

  return (
    <div className=' h-screen flex flex-col justify-between'>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
