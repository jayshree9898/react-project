import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("useEffect hooks call")
  });

  useEffect(() => {
    console.warn("useEffect hooks call 1")
  });

  return (
    <div className="App">
      <h1>useEffect Hooks {count}</h1>
      <button onClick={() => setCount(count + 1)}>update counter</button>
    </div>
  );
}

export default App;
