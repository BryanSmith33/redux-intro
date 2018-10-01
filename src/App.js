import React, { Component } from 'react';
import './App.css';

// import Provider from react-redux. Provider allows us to give access to any children component inside it
import { Provider } from 'react-redux'
// import the store we create inside of ducks folder
import store from './ducks/store'

// import our components
import Pappy from './Components/Pappy'
import Dad from './Components/Dad'
import Child from './Components/Child'
import ColorTray from './Components/ColorTray'

class App extends Component {
  render() {
    return (
      // pass a store prop to Provider. this references the store we created
      <Provider store={store}>
        <div className="App">
          <ColorTray />
          <Pappy>
            <Dad>
              <Child />
            </Dad>
          </Pappy>
        </div>
      </Provider>
    );
  }
}

export default App;
