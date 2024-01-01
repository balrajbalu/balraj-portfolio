import React from 'react'
import MainNavbar from './MainNavbar'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Projects from './Projects'
import ResumeNew from './Cv'
import ServicesPage from './ServicesPage'
import ContactUs from './ContactUs'

const Main = () => {
  return (
    <div className='container-fluid'>
        <MainNavbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/skills' element={<Skills/>}/>
            <Route path='/projects' element={<Projects/>}/>
            <Route path='/services' element={<ServicesPage/>}/>
            <Route path='/cv' element={<ResumeNew/>}/>
            <Route path='/contact' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default Main