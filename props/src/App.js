import React, { useState } from 'react'
import Student from './student';
import './App.css';


function App() {
  const [name, setName] = useState("Dev")
  return (
    <div className='App'>
      <h1>Props in react</h1>
      <Student name={name} />
      <button onCc lick={() => { setName("devangi") }}>Update Name</button>
      {/* <Student name="dev" email="dev@gmail.com" other={{ address: "surat", mno: 90999 }} />
      <Student name="maya" email="maya@gmail.com" other={{ address: "rajkot", mno: 90999 }} /> */}
    </div>
  );
}

export default App;
