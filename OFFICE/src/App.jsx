import { useState } from 'react'
import './App.css'
import Navbar from './components/HomePage/Navbar'
import HomePage from './components/HomePage/HomePage'
import Footer from './components/HomePage/Footer'
import SignUp from './components/HomePage/SignUp'
import HomePagee from './components/Pages/HomePagee'
import {BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
import Login from './components/HomePage/Login'
import EmployeePage from './components/Pages/EmployeePage'

function App() {
 

  return (
    <>
    <HomePagee/>
      <EmployeePage/>
 
    </>
  )
}

export default App
