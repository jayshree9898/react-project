import { useState } from 'react'
import './App.css';

//..state
function App() {
  const [data, setData] = useState(0);

  function updateData() {
    setData(data + 1)
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={updateData}>Update Data</button>
    </>
  );
}

export default App;
