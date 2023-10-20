import React, { useState, use } from 'react';
import './App.css';

function App() {
  const [name, setname] = useState("Dev");
  return (
    <div className="App">
      <h1>useState Hooks</h1>
      <h1>{name}</h1>
      <button onClick={() => setname("devanshi")}>update Data</button>
    </div>
  );
}

export default App;




