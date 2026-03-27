import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


const NavBarComponent = () => {
  return (
    <div className='main'>
      <ul>
        <li><Link to ='/' >Home</Link></li>

        <li><Link to ='/cart'>Cart</Link></li>
      </ul>
    </div>
  )
}

export default NavBarComponent
