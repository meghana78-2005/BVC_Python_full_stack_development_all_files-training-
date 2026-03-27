import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route}from "react-router-dom";
import Login from './pages/Login'
import NavComponent from './Components/NavComponent'
import NavScrollExample from './Components/NavComponent'


const App = () => {
  return (
    <Router>
      <NavScrollExample/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}>
          <Route path='login' element={<Login/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
