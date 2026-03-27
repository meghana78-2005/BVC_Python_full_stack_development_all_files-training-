import React, { useRef } from 'react'

const UseRefExample = () => {
    const ref = useRef()
    const handleClick = ()=>{
        ref.current.focus()
    }
  return (
    <>
      <input type="text" ref={ref} />
      <button onClick={handleClick}>Focus</button>
    </>
  )
}

export default UseRefExample
