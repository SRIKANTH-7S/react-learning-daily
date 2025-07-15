import React from 'react'
import {useState} from 'react'

const ClickEvent=()=>{

const[number,SetNumber]=useState(0)

const increment=()=>{
    SetNumber(number+1)
}

function decrement(){
    if (number>0) {
        SetNumber(number-1)
    }
}

function reset(){
    SetNumber(0)
}
    return(
        <div>
            <h2>Click Event Testing</h2>
            <h3>{number}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ClickEvent;

