import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='text-center bg-dark text-light'>DashBoard
      <Link to ='userdata'>userData</Link>
      <Link to ='settings'>Settings</Link>
      <Outlet/>
    </div>
  )
}

export default Dashboard
