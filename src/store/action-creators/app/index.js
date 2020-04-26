import { appActionTypes } from '@/store/action-types'
export default function errMsgActionCreator(msg) {
  return {
    type: appActionTypes.ERR_MSG_SHOW,
    error: msg
  }
}
