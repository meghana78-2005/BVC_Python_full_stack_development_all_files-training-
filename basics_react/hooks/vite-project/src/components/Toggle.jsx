import React, { useState } from 'react'

const Toggle = () => {
    const [toggle,setToggle] = useState(true)
  return (
    <>
      <button onClick={()=>setToggle(! toggle)}>{toggle?"Show":"hide"}</button>
      {toggle?"":"this content is visible"}
    </>
  )
}

export default Toggle