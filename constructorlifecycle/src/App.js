import React from 'react'
import './App.css';

class Demo extends React.Component {
  constructor() {
    super()
    console.warn("Constructor Call")
    this.state = {
      data: "Devangi"
    }
  }

  render() {
    return (
      <>
        <h1>Hello {this.state.data}</h1>
      </>
    )
  }
}

export default Demo;
