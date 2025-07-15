
import React, { useState } from 'react'

const EventListener = () => {
    
    const[beforeClick,afterClick]=useState("Click Me")

    const after=()=>{
        afterClick("You Clicked Me!")
    }
  return (
    <div>
        <h3>EventListener Testing</h3>
        <button onClick={after}>{beforeClick}</button>
    </div>
  )
}

export default EventListener