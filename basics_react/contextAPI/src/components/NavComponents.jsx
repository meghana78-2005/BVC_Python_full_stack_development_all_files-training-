import React from 'react'
import { useContext } from 'react'
import { ThemetContext } from '../context/ThemetContext'


const NavComponents = () => {
    const {theme,setTheme} = useContext(ThemetContext)
    const handleChange = ()=>{
        setTheme(theme==="dark"?"light":"dark")
    }
  return (
    <div style = {{background:theme == 'dark' ? '#333' : '#eee', color:theme == 'dark' ? '#fff' : '#000'}}>
        <h1>Hello</h1>
        <button onClick={handleChange}>
            toggle theme
        </button>
    </div>
  )
}

export default NavComponents
