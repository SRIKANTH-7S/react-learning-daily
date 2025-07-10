import React from 'react'

//props destructuring

const SecondCont = (props) => {
    const {name,marks}=props.u
  return (
   <div>

    {/* this is the normal props */}

    {/* <h2>Hello {props.name} {props.u.marks}</h2> */} 


{/* props destructuring */}

    {name}
    {marks}
    </div>
  )
}

export default SecondCont