import React from 'react'
import Navbar from '../HomePage/Navbar'
import HomePage from '../HomePage/HomePage'
import Footer from '../HomePage/Footer'
import SignUp from '../HomePage/SignUp'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Login from '../HomePage/Login'

function HomePagee() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      
    </Router>
  )
}

export default HomePagee
