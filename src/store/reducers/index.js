import { combineReducers } from 'redux-immutable'

import search from './search'
import fund from './fund'
import user from './user'

export default combineReducers({
  search,
  fund,
  user
})
