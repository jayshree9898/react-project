import './App.css';
import Student from './Student';
import React from 'react';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      name: "devanshi"
    }
  }

  render() {
    return (
      <div className="App">
        <Student name={this.state.name} email="dev@gmail.com" />
        <button onClick={() => this.setState({ name: "dev" })}>Update Data</button>
      </div>
    );
  }

}

export default App;
