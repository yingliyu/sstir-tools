import { userActionTypes } from '@/store/action-types'
import { userApi } from '@/services'
import Cookies from 'js-cookie'
import urls from '@/utils/url-creator'

// 通过token获取用户信息
export function getUserInfoCreator() {
  return async (dispatch) => {
    try {
      const userInfo = await userApi.getUserInfo()
      dispatch(userInfoChangeSucc(userInfo))
    } catch (error) {
      console.log(error)
      dispatch(userInfoChangeSucc(null))
    }
  }
}

// 登出
export function logoutActionCreator() {
  return async (dispatch) => {
    try {
      await userApi.logOut()
      const token = Cookies.get('token')
      if (token) {
        if (urls.domain) {
          Cookies.remove('token', { domain: urls.domain })
          Cookies.remove('token')
        } else {
          Cookies.remove('token')
        }
      }
      dispatch(userInfoChangeSucc(null))
      window.location.href = urls.casLoginout + encodeURIComponent(urls.indexUrl)
    } catch (error) {
      console.log('退出失败，请重试')
    }
  }
}

const userInfoChangeSucc = (val) => {
  return {
    type: userActionTypes.USER_INFO_CHANGE,
    payload: val
  }
}

// （查看基金项目时）用户登录提示
export function showLoginTipsToggle(val) {
  return {
    type: userActionTypes.SHOW_LOGIN_TIPS,
    payload: val
  }
}

// 用户退出提示
export function showLogoutTipsToggle(val) {
  return {
    type: userActionTypes.SHOW_LOGOUT_TIPS,
    payload: val
  }
}
