import * as types from '../constants'

const initialState = {
  count: 0
}
const counter = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREASE:
      return {
        count: state.count + 1
      }
    case types.DECREASE:
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}

export default counter
