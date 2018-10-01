// import createStore from redux. don't worry about what this does but know that it makes it all work
import { createStore } from 'redux'
// importing our reduce and calling it color
import color from './color_reducer'

//uisng the createStore function with the reducer passed in
export default createStore(color)