import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => { //here childern is component
    // const navigate = useNavigate()
    const isAuthenticated = false
    return isAuthenticated?children:<Navigate to ='/' replace/>
}

export default ProtectedRoute
