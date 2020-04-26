import { searchActionTypes, appActionTypes } from '@/store/action-types'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  showTips: false, // 主页的提示信息modal是否显示
  searchInputVal: '',
  showNoFieldTips: false,
  isLoading: false,
  reportLoading: false,
  errMsg: '',
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
    case searchActionTypes.TIP_EXIST_CHANGE:
      return state.set('showTips', action.payload)
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
      // return state.set('fieldList', action.payload)
      return state.merge({
        isLoading: false,
        errMsg: '',
        fieldList: action.payload
      })
    case searchActionTypes.ACTIVE_FIELD_CHANGE:
      return state.set('activeField', action.payload)
    case searchActionTypes.ACTIVE_TAB_BAR_CHANGE:
      return state.set('activeTabBar', action.payload)
    case appActionTypes.SEARCH_FIELD_ERROR:
      return state.merge({
        isLoading: false,
        errMsg: action.payload,
        fieldList: []
      })
    // 可视化list
    case searchActionTypes.RESEARCH_TREND_START:
      return state.set('reportLoading', true)
    case searchActionTypes.RESEARCH_TREND_SUCC:
      return state.merge({
        reportLoading: false,
        errMsg: '',
        researchTrendList: action.payload
      })
    case appActionTypes.RESEARCH_TREND_ERROR:
      return state.merge({
        reportLoading: false,
        errMsg: action.payload,
        researchTrendList: []
      })
    case searchActionTypes.HIGH_AUTHOR_SUCC:
      return state.set('highAuthorList', action.payload)
    case searchActionTypes.HIGH_ORG_SUCC:
      return state.set('highOrgList', action.payload)
    case searchActionTypes.PROJECT_TREND_SUCC:
      return state.set('projectTrendList', action.payload)
  }
}
