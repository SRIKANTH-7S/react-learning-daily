
import React from 'react'

//understanding the props concept

const FirstCont = (props) => {
  return (
    <div><h2>Hello {props.name} {props.u.marks}</h2></div>
  )
}

export default FirstCont