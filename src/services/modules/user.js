import { AppGet } from '@/utils/request'

export function getUserInfo() {
  return AppGet('/crm/auth/selectUserByUserId')
}

export function logOut() {
  return AppGet('/basic/cas/logout')
}
