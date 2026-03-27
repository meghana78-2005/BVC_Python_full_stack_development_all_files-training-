import React, { useState } from 'react'
import { ThemetContext } from './ThemetContext'

const ThemetProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")
    return (
        <div>
            <ThemetContext.Provider value={{ theme, setTheme }}>
                {children}
            </ThemetContext.Provider>
        </div>


    )
}

export default ThemetProvider