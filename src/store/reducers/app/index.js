import { fromJS } from 'immutable'
const defaultState = {
  errorMsg: ''
}

const reducer = (state = fromJS(defaultState), action) => {
  if (action.errorMsg) {
    return state.set('errorMsg', action.errorMsg)
  }
  return state
}

export default reducer
