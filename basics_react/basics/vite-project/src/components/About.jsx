import React from 'react'
import Home from './Home'

const About = ({obj}) => {
    const style={color:"aqua",
      background:"darkblue",
      textAlign:"center"
      }
  return (
    <>
      {/* <h1 style={{color:"aqua",
      background:"darkblue",
      textAlign:"center"
      }}>ABout Page</h1> */}
      <h1 style={style}>About</h1>
      <Home obj={obj}/>
    </>
  )
}

export default About
