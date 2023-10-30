import React, { useState, useMemo } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const multiuseMemo = useMemo(function multiCount() {
    console.warn("function call")
    return count * 5
  }, [count])

  return (
    <div className="App">
      <h1>use memo hook in react </h1>
      <h3>
        Count:{count}<br />
        Item:{item}
        <br />
        {multiuseMemo}
      </h3>
      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setItem(item * 10)}>update count</button>
    </div>
  );
}

export default App;
