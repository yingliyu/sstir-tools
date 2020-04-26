import { combineReducers } from 'redux-immutable'
import app from './app'
import search from './search'
import fund from './fund'
import user from './user'

export default combineReducers({
  app,
  search,
  fund,
  user
})
