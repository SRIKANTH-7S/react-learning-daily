import React,{useState} from 'react'

const FormEvents = () => {

    const[userName, setUserName]=useState("")

    const getUserName = (event) => {
        setUserName(event.target.value)
    }
    
  return (
    <div>
        <h2>FormEvents Checking</h2>
        <div>
            <input type="text" placeholder='Enter Your Name' onChange={getUserName}/>
        </div>
        <br/>
        <button>Submit</button>

    </div>
  )
}

export default FormEvents