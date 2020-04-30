import { userActionTypes } from '@/store/action-types'
import Cookies from 'js-cookie'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  token: Cookies.get('token'),
  userInfo: null,
  showLoginTips: false,
  showLogoutModal: false
})
// reducer可以接收state。但不能修改state。
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
    case userActionTypes.USER_INFO_CHANGE:
      return state.set('userInfo', action.payload)
    case userActionTypes.SHOW_LOGIN_TIPS:
      return state.set('showLoginTips', action.payload)
    case userActionTypes.SHOW_LOGOUT_TIPS:
      return state.set('showLogoutModal', action.payload)
  }
}
