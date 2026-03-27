import React from 'react'
import Home from './components/Home'
import About from './components/About'
import "./App.css"
import Skills from './components/Skills'

const App = () => {
  const obj = {
    name:"Meghana",
    age:"20",
    city:"AMalapuram"
  }
  return (
    <>
      <About obj={obj}/>
    </>
  )
}

export default App
