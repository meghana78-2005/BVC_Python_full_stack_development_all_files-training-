import React, { useState } from 'react'

const Object = () => {
    const [obj, setObj] = useState({ name: "Adam", age: 25 })
    const handleClick=()=>{
        setObj({...obj,city:"Amalapuram"})
    }

    return (
        <>
            {obj.name}
            {obj.age}
            {obj.city?obj.city:""}
            <button onClick={handleClick}>add city properties</button>
        </>
    )
}

export default Object
