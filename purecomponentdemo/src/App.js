import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  render() {
    return (
      <div className="App" >
        <h1>Pure component in react {this.state.count}</h1>
        <button onClick={}>update</button>
      </div>
    );
  }
}

export default App;
