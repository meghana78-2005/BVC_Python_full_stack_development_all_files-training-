import React, { useState } from 'react'

const List = () => {
    const [list,SetList] = useState(["apple","banana","orange"])
    const [newList,setNewList] = useState("")
    const handleClick= () => {
        SetList([...list,newList])
    }
  return (
    <>
      <ul>
        {list.map((item)=>(
            <li>{item}</li>
        ))}
        <input type ="text" onInput={(e)=>setNewList(e.target.value)}/>
        <button onClick={handleClick}>Add items</button>
      </ul>
    </>
  )
}

export default List
