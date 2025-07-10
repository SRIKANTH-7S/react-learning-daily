import {useState, useEffect} from 'react'


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


//useState in Hooks(State management)

const Hook=()=>{

  const[city, setCity]=useState("Warangal")
  
//change the current state
  const handleChange = () => {
    setCity("Jangaon");
  };


  return(
    <div>
      <h2>We are dealing with the useState Hook</h2>
      <h3>City: {city}</h3>
      <button onClick={handleChange}>Change City</button>
    </div>
  )
}


// useEffect Hook demo (Side-effect handling)

const EffectDemo = () => {
  const [count, setCount] = useState(0);

  // useEffect explanation in Telugu mix:
  // Ee function render ayyaka or count change ayyaka run avuthundi.
  useEffect(() => {
    console.log("useEffect triggered: Count = " + count);
    // Alert ki baduluga console.log vesaam to avoid popup irritation
  }, [count]);

  return (
    <div>
      <h2>useEffect Hook Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

//Ternary Operator

const Ternary=() => {
  const[Test,setTest]=useState(1)

useEffect(() => {
  if (Test === 1) {
    setTest(2); // only set once
  }
}, [Test]);

return(
  <div>Ternary operator related</div>
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
        <Hook/>
        <EffectDemo/>
        <Ternary/>
    </div>
  )
}

export default Sample