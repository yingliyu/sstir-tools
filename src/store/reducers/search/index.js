import { searchActionTypes } from '@/store/action-types'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  showTips: true, // 主页的温馨提示modal默认显示
  searchInputVal: '',
  showNoFieldTips: false,
  isLoading: false,
  reportLoading: true,
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
      return state.merge({
        isLoading: true,
        fieldList: []
      })
    case searchActionTypes.SEARCH_FIELD_SUCC:
      return state.merge({
        isLoading: false,
        fieldList: action.payload,
        activeField: 0,
        activeTabBar: 1,
        currentReport: 0
      })
    case searchActionTypes.ACTIVE_FIELD_CHANGE:
      return state.set('activeField', action.payload)
    case searchActionTypes.ACTIVE_TAB_BAR_CHANGE:
      return state.set('activeTabBar', action.payload)
    // 可视化list
    case searchActionTypes.RESEARCH_TREND_START:
      return state.merge({
        reportLoading: true,
        researchTrendList: [],
        highAuthorList: [],
        highOrgList: [],
        projectTrendList: []
      })
    case searchActionTypes.RESEARCH_TREND_SUCC:
      return state.merge({
        // reportLoading: false,
        researchTrendList: action.payload
      })
    case searchActionTypes.HIGH_AUTHOR_SUCC:
      return state.merge({
        highAuthorList: action.payload,
        reportLoading: false
      })
    case searchActionTypes.HIGH_ORG_SUCC:
      return state.set('highOrgList', action.payload)
    case searchActionTypes.PROJECT_TREND_SUCC:
      return state.merge({
        projectTrendList: action.payload,
        reportLoading: false
      })
  }
}
