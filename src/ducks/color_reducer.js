//setting our initial state. ALWAYS SET AN INITIAL STATE
const initialState = {
  color: 'olivedrab'
}

// actions as constants
const CHANGE_COLOR = 'CHANGE_COLOR'
const RESET_COLOR = 'RESET_COLOR'

// reducer. This takes in two aprams (state and action) and runs the switch case based on the action.type
export default function colorReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COLOR:
      return {
        color: action.color
      }
    case RESET_COLOR:
      return {
        color: initialState.color
      }
    default:
      return state
  }
}

//function that will update thhe color
export function colorChanger(color) {
  return {
    color,
    type: CHANGE_COLOR
  }
}

//function that will reset the color back to the olivedrab color
export function resetColor() {
  return {
    type: RESET_COLOR
  }
}