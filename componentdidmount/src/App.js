import './App.css';
import React from 'react';


class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "devanshi"
    }
  }

  componentDidMount() {
    console.warn("ComponentDidMount")
  }

  render() {
    console.warn("Render")
    return (
      <div className="App" >
        <h1>Component Did Mounts {this.state.name} </h1>
        <button onClick={() => this.setState({ name: "jayshree" })}>update Data</button>
      </div>
    );

  }
}

export default App;
