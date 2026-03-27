import React, { useState } from 'react'
import { AuthContext } from './AuthContext'

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState("true")
    return (
        <div>
            <AuthContext.Provider value={{auth, setAuth}}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
