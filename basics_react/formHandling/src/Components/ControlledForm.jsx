import React, { useState } from 'react'

const ControlledForm = () => {
    const [form,setForm] = useState({
        // username:"",
        email:"",
        password:""
    })


    const [newdata,setNewData] = useState({
        email:"",
        password:""  
    })
    const handleChange=(e)=>{
          setForm({...form,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        setNewData(form)
        console.log(form)
    }
  return (
    <>
            <form onSubmit={handleSubmit}>
                {/* <input type ="text" placeholder='enter username..'onChange={(e)=>setForm(e.target.value)}/> */}
                <input type ="email" placeholder='enter user emailID..' name='email' value ={form.email} onChange={handleChange}/>
                <input type ="password" name='password' value={form.password} placeholder='enter password..' onChange={handleChange}/>
                <button type='submit'>Login</button>

            </form>
            <div>
                <h1>{newdata.email}</h1>
                <h1>{newdata.password}</h1>
            </div>

    </>
  )
}

export default ControlledForm
