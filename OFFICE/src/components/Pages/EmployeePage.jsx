import React from 'react'

import ENavbar from '../EmployeePage/ENavbar'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'

import SignUp from '../HomePage/SignUp'  // ✅ ADD THIS
import Login from '../HomePage/Login' 
import EHomePage from '../EmployeePage/EHomePage'
function EmployeePage() {
  return (
  <Router>
      <ENavbar/>
      <Routes>
        
        <Route path="/" element={<EHomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
      
    </Router>
     

  )
}

export default EmployeePage
