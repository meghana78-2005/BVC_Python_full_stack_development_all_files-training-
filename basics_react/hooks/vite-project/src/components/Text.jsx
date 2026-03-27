import React, { useState } from 'react'

const Text = () => {
    const [text, setText] = useState("")
    const [newtext, setNewText] = useState("")
    return (
        <>
            <input type="text" onInput={(e) => setText(e.target.value)} />
            <button onClick={() => setNewText(text)}>click to see</button>
            <h1>{newtext}</h1>
        </>
    )
}

export default Text
