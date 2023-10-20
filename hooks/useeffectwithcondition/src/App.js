import React, { useEffect, useState } from 'react';
import './App.css';
import User from './user.js'

function App() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.warn("called with data set")
  }, [count]);

  useEffect(() => {
    alert("called with data set")
  }, [data])

  return (
    <div className="App">
      <h1>count {count}</h1>
      <h1>data {data}</h1>
      {/* <User /> */}
      <button onClick={() => setCount(count + 1)}> count update</button>
      <button onClick={() => setData(data + 1)}>update data</button>
    </div>
  );
}

export default App;
