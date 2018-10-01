import React, { Component } from 'react'
// import connect from react-redux. connect allows us to literally connect whichever component we want to our store
import { connect } from 'react-redux'

class Child extends Component {
  render() {
    // one way to style things but you would usually use a .css file. we are using this style object because we want to manipulate the background color with props
    const childStyle = {
      height: `200px`,
      width: `200px`,
      background: this.props.color,
      margin: `0 auto`
    }
    return (
      <div style={childStyle}>
        <h3>I am the child, Prince Snuggles</h3>
      </div>
    )
  }
}

// mapping state to props. this function can be called anything but all it is doing is taking state from the store and attaching to props
const mapStateToProps = state => state

// using the connect function to use thhe mapStateToProps function and attaching it to our ColorTray Component
export default connect(mapStateToProps)(Child)