
//nested components

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


//JSX

function JSX() {
  return (
    <div>JSX</div>
  )
}

//Dynamic Data Rendering in JSX

let a="Kranthi"

const Dynamic=()=>{
  return(
    <h2>Hello {a}</h2>
  )
}

//Element Styling

function Styling(){
  return(
  <div id="main">
    <h3 id="one">This section is about element Styling! </h3>
    <p id="two">Welcome to the class</p>
  </div>
  )
}

//Images with react

const Images=()=>{
  return(
    <div id="img">
      <img src="https://i.pinimg.com/736x/15/b0/22/15b02244c342916c64f0a986c6d1c859.jpg" alt="welcome"/>
    </div>
  )
}

function Sample() {
  return (
    <div>Sample
        <Mango/>
        <Grapes/>
        <JSX/>
        <Dynamic/>
        <Styling/>
        <Images/>
    </div>
  )
}

export default Sample