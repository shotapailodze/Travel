import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact />
        </Routes>
        <HeroSection />
      </Router>
    </div>
  )
}

export default App