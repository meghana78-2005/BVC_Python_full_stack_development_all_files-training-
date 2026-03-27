import React, { useEffect, useState } from 'react'

const Dependenciesex = () => {
    const [count,setCount] = useState(0);
    const [count1,setCount1] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(()=>{
        console.log(count)
        console.log(count1)
        console.log(count2)
    },[count]) //when increments only the values of count will be shown in console even though count1,count2 increments
  return (
    <>
      <h1>{count}{count1}{count2}</h1>
      <button onClick = {()=>setCount(count+1)}>++</button>
      <button onClick = {()=>setCount1(count1+1)}>++</button>
      <button onClick = {()=>setCount2(count2+1)}>++</button>
    </>
  )
}

export default Dependenciesex
