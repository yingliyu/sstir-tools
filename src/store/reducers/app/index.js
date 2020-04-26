import { appActionTypes } from '@/store/action-types'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  errMag: ''
})
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return ''
    case appActionTypes.ERR_MSG_SHOW:
      return state.set('errMsg', action.error)
  }
}
