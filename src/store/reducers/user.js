import { USER_TOKEN } from '../constants'

const initialState = {
  userToken: ''
}

const userToken = (state=initialState, action) => {
  switch(action.type) {
    case USER_TOKEN:
      return {
        userToken: action.payload
      }
    default:
      return state 
  }
}

export default userToken
