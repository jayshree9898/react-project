import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [tnc, setTnc] = useState(false);
  const [interest, setInterest] = useState("");

  function getFormData(e) {
    console.log(name, tnc, interest);
    e.preventDefault();
  }

  function clearForm() {
    setName("");
    setTnc(false);
    setInterest("");
  }

  return (
    <div className="App">

      <h1>Form handle in React</h1>

      <form onSubmit={getFormData}>

        <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />

        <select value={interest} onChange={(e) => setInterest(e.target.value)}>
          <option value="">Select Option</option>
          <option value="Marvel">Marvel</option>
          <option value="Dc">Dc</option>
        </select><br /><br />

        <input type="checkbox" checked={tnc} onChange={(e) => setTnc(e.target.checked)} /><span>Accept Terms And Conditions</span>
        <br /><br />

        <button type="submit">Submit</button>
        <button type="button" onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
}

export default App;
