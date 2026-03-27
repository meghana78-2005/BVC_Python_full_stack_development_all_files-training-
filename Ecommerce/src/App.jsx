import React from 'react'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom'
import NavBarComponent from './Components/NavBarComponent'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

const App = () => {
  return (
    <>
      <Router>
        <NavBarComponent/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
