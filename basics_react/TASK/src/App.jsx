import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "reacr-router-dom";
import NavScrollExample from './Components/NavBarComponent';
import Home from './pages/Home';
import Login from './pages/Login';



const App = () => {
  return (
    <>
      <Router>
        <NavScrollExample />
        <Routes>
          <Route path='/home' element={<Home />}>
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
