import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Signup from './components/pages/SignUp'
import Products from './components/pages/Products'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/products' Component={Products} />
          <Route path='/signup' Component={Signup} />
        </Routes>
      </Router>
    </div>
  )
}

export default App