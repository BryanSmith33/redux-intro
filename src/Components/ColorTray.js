import React, { Component } from 'react'
// import connect from react-redux. connect allows us to literally connect whichever component we want to our store
import { connect } from 'react-redux'
//importing the two functions we created in our reducer
import { colorChanger, resetColor } from '../ducks/color_reducer'

class ColorTray extends Component {
  render() {
    // logging props so we can visually see we are getting data from the store
    console.log(this.props)
    return (
      <div>
        <div className="color"
          style={{ background: `tomato` }}
          // using the colorChanger function from our reducer passing in a color arg
          onClick={() => this.props.colorChanger(`tomato`)}></div>
        <div className="color"
          style={{ background: `aquamarine` }}
          // using the colorChanger function from our reducer passing in a color arg
          onClick={() => this.props.colorChanger(`aquamarine`)}></div>
        <div className="color"
          style={{ background: `#ff0099` }}
          // using the colorChanger function from our reducer passing in a color arg
          onClick={() => this.props.colorChanger(`#ff0099`)}></div>
          {/* using the resetColor function from our reducer */}
        <button onClick={() => this.props.resetColor()}>Reset Color</button>
      </div>
    )
  }
}

// mapping state to props. this function can be called anything but all it is doing is taking state from the store and attaching to props
const mapStateToProps = state => state

// using the connect function to use thhe mapStateToProps function and attaching it to our ColorTray Component
export default connect(mapStateToProps, { colorChanger, resetColor })(ColorTray)