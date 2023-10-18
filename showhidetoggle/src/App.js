import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [status, setStatus] = useState(true)
  // const [print, setPrint] = useState(false)
  return (

    <div className="App">
      {
        status ? <h1>Hello </h1> : null
      }

      {/* <button onClick={() => setStatus(false)}>Hide</button>
      <button onClick={() => setStatus(true)}>Show</button> */}
      <button onClick={() => setStatus(!status)}>Toggle</button>

    </div>

  );

}

export default App;
