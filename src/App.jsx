import { useState } from 'react'
import './App.css'
import Navbar from './Comps/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './Comps/About'
import Resume from './Comps/Resume'
import { Contact } from './Comps/Contact'
import Home from './Comps/Home'
import Footer from './Comps/footer'
import NotFound from './Comps/NotFound'

function App() {
  
  return (
    // individual routes on the nav
      <>
      <Navbar />
      
      <Routes>
         <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='*' element={<NotFound />} /> 
      </Routes>
      <Footer />
      </>
  )
}

export default App
