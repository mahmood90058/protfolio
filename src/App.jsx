import React from 'react'
import Navbar from './Componets/Navbar'
import Home from './Componets/Home'
import About from './Componets/About'
import Portfolio from './Componets/Portfolio'
import Experiance from './Componets/Experiance'
import Footer from './Componets/Footer'
import Contact from './Componets/Contact'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Experiance/>
    <Contact/>
    <Footer/>

    </div>
    <Toaster/>
    
    </>
  )
}

export default App

