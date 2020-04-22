import { searchActionTypes } from '@/store/action-types'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  searchInputVal: '肾移植手术 气候变化',
  showNoFieldTips: false,
  fieldList: [],
  activeField: 0,
  activeTabBar: 1,
  currentReport: 0,
  researchTrendList: [],
  highAuthorList: [],
  highOrgList: [],
  projectTrendList: []
})
// reducer可以接收state。但不能修改state。
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state
    case searchActionTypes.SEARCH_INPUT_CHANGE:
      return state.set('searchInputVal', action.payload)
    case searchActionTypes.SHOW_NO_FIELD_TIPS_CHANGE:
      return state.set('showNoFieldTips', action.payload)
    case searchActionTypes.SEARCH_FIELD_CHANGE:
      return state.set('fieldList', action.payload)
    case searchActionTypes.CURRENT_REPORT_CHANGE:
      return state.set('currentReport', action.payload)
    case searchActionTypes.SEARCH_FIELD_START:
      return state.set('isLoading', true)
    case searchActionTypes.SEARCH_FIELD_SUCC:
      return state.set('fieldList', action.payload)
    // return state.merge({
    //   isLoading: false,
    //   errMsg: '',
    //   fieldList: fromJS(action.payload)
    // })
    case searchActionTypes.ACTIVE_FIELD_CHANGE:
      return state.set('activeField', action.payload)
    case searchActionTypes.ACTIVE_TAB_BAR_CHANGE:
      return state.set('activeTabBar', action.payload)
    case searchActionTypes.SEARCH_FIELD_ERROR:
      return state.merge({
        isLoading: false,
        errMsg: action.payload,
        fieldList: fromJS([])
      })
    // 可视化list
    case searchActionTypes.RESEARCH_TREND_SUCC:
      return state.set('researchTrendList', action.payload)
    case searchActionTypes.HIGH_AUTHOR_SUCC:
      return state.set('highAuthorList', action.payload)
    case searchActionTypes.HIGH_ORG_SUCC:
      return state.set('highOrgList', action.payload)
    case searchActionTypes.PROJECT_TREND_SUCC:
      return state.set('projectTrendList', action.payload)
  }
}
