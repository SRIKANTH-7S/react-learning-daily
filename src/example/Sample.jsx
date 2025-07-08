import React from 'react'

const Mango=()=>{
    return(
        <h2>Mangoes are sweet to Taste!</h2>
    )
}

function Grapes() {
  return (
    <h2>Grapes are healthy to Eat!</h2>
  )
}

function Sample() {
  return (
    <div>Sample
        <Mango/>
        <Grapes/>
    </div>
  )
}

export default Sample