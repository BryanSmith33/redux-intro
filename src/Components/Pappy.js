import React, { Component } from 'react'

class Pappy extends Component {
  render() {
    return (
      <div>
        <h1>I am Pappy</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Pappy