import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import SignUp from './components/SignUp'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
 

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

export default App
