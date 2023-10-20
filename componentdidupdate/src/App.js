import './App.css';
import React from 'react';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  componentDidUpdate(preProps, preState, snapShot) {
    console.warn("Component did update", preState)
  }

  render() {
    console.warn("Render")
    return (
      <div className="App" >
        <h1>Component Did Mounts {this.state.count} </h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>update Data</button>
      </div>
    );

  }
}

export default App;
