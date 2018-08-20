import { USER_TOKEN } from '../constants'

export const setToken = (payload) => ({
  type: USER_TOKEN,
  payload
})