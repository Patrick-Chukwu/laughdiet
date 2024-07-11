import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Artists from './pages/Artists'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/artists' element={<Artists/>}/>

      </Routes>
      <Footer/>
    </div>
  )
}

export default App