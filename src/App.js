import './App.css';
import Apple from './Apple'
import Sample from './example/Sample'
import './example/Sample.css'
import FirstCont from './propsContainer/firstCont';
import SecondCont from './propsContainer/secondCont';
import ThirdCont from './propsContainer/thirdCont';


const user={
  name:"Test",
  marks:"77"
}
function App() {
  return (
    <div className="App">
      <Apple/>
      <Sample/>
      <h1>Hello KMIT</h1>

      <FirstCont name="Ram" u={user}/>
      <SecondCont name="Krishna" u={user} />
      <ThirdCont name="Arjun" u={user} />
    </div>
  );
}

export default App;
