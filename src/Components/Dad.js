import React, {Component} from 'react'

class Dad extends Component {
  render(){
    return (
      <div>
        <h2>I am Dad</h2>
        {this.props.children}
      </div>
    )
  }
}

export default Dad