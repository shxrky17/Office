import React from 'react'

import ENavbar from '../EmployeePage/ENavbar'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

import SignUp from '../HomePage/SignUp'  
import Login from '../HomePage/Login' 
import EHomePage from '../EmployeePage/EHomePage'
import HomePage from '../HomePage/HomePage'
function EmployeePage() {
  return (
  <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/employee" element={<EHomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      
    </Router>
     

  )
}

export default EmployeePage
