import { fundActionTypes } from '@/store/action-types'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  fundList: [],
  fundSortType: '',
  fundCurrentPage: 1,
  fundPageTotal: 0,
  fundListTotal: 0,
  fundProjectDetail: null,
  userInfo: null
})
// reducer可以接收state。但不能修改state。
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
    case fundActionTypes.FUND_LIST_SUCC:
      return state.set('fundList', action.payload)
    case fundActionTypes.FUND_SORT_CHANGE:
      return state.set('fundSortType', action.payload)
    case fundActionTypes.FUND_CURRENT_PAGE_CHANGE:
      return state.set('fundCurrentPage', action.payload)
    case fundActionTypes.FUND_PAGE_TOTAL_CHANGE:
      return state.set('fundPageTotal', action.payload)
    case fundActionTypes.FUND_PROJECT_TOTAL_CHANGE:
      return state.set('fundListTotal', action.payload)
    case fundActionTypes.FUND_PROJECT_DETAIL_CHANGE:
      return state.set('fundProjectDetail', action.payload)
  }
}
