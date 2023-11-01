import User from './user';
import { useState } from 'react';
import A from './a'

//.....using props
function App() {
  const [name, setname] = useState("xyz")
  return (
    <div className="App">
      <h1>Render Method in React</h1>
      <User name={name} />
      <button onClick={() => setname("dev")}>submit</button>
    </div>
  );
}



//.....using state
// function App() {
//   const [name, setname] = useState("xyz")
//   return (
//     <div className="App">
//       <h1>Render Method in React</h1>
//       <User />
//     </div>
//   );
// }



export default App;
