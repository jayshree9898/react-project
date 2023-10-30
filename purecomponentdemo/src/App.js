import React from 'react';
import './App.css';
import User from './user';
class App extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      count: 1
    }
  }

  render() {
    console.warn("check")
    return (
      <div className='App'>
        <User count={this.state.count} />
        <h1>Pure component in react {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>update Count </button>

      </div>
    );
  }
}

export default App;
