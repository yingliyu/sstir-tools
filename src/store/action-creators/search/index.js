import { searchActionTypes } from '@/store/action-types'
import { searchApi, reportApi } from '@/services'
const searchFieldStart = () => {
  return {
    type: searchActionTypes.SEARCH_FIELD_START
  }
}

const searchFieldSucc = (data) => {
  return {
    type: searchActionTypes.SEARCH_FIELD_SUCC,
    payload: data
  }
}

const searchFieldError = (msg) => {
  return {
    type: searchActionTypes.SEARCH_FIELD_ERROR,
    payload: msg
  }
}
const showNoFieldTipsChange = (val) => {
  return {
    type: searchActionTypes.SHOW_NO_FIELD_TIPS_CHANGE,
    payload: val
  }
}
export function tipsExistChangeCreator(val) {
  return {
    type: searchActionTypes.TIP_EXIST_CHANGE,
    payload: val
  }
}
export function searchInputChangeCreator(val) {
  return {
    type: searchActionTypes.SEARCH_INPUT_CHANGE,
    payload: val
  }
}

// 根据关键词拆分领域
export function getFieldListCreator() {
  return async (dispatch, getState) => {
    dispatch(searchFieldStart)
    try {
      const { data: list } = await searchApi.extraKeywords({
        q: getState().getIn(['search', 'searchInputVal'])
      })
      dispatch(searchFieldSucc(list))
      dispatch(activeFieldChange(0))
      dispatch(activeTabBarChange(1))
      dispatch(currentReportChange(0))
      dispatch(getTabContentByField())
      if (list.length) {
        dispatch(showNoFieldTipsChange(false))
      } else {
        dispatch(showNoFieldTipsChange(true))
      }
    } catch (e) {
      console.log(e)
      dispatch(searchFieldError(e))
    }
  }
}
// 当前领域
const activeFieldChange = (val) => {
  return {
    type: searchActionTypes.ACTIVE_FIELD_CHANGE,
    payload: val
  }
}
export function activeFieldChangeCreator(val) {
  return async (dispatch) => {
    dispatch(activeFieldChange(val))
  }
}

// 通过'领域'获取可视化数据及基金项目数据
export function getTabContentByField() {
  return async (dispatch, getState) => {
    try {
      const activeField = getState().getIn(['search', 'activeField'])
      const fieldList = getState().getIn(['search', 'fieldList'])
      const activeFieldName = fieldList[activeField]?.keyword
      const queryParam = { q: activeFieldName }

      const [searchTrendList, relateAuthorList, highOrgList, projectTrendList] = await Promise.all([
        reportApi.searchTrends(queryParam),
        reportApi.highAuthors(queryParam),
        reportApi.highOrgs(queryParam),
        reportApi.projectTrends(queryParam)
      ])
      dispatch(getResearchTrendSucc(searchTrendList.aggs))
      dispatch(getHighAuthorSucc(relateAuthorList.aggs))
      dispatch(getHighOrgSucc(highOrgList.aggs))
      dispatch(getProjectTrendSucc(projectTrendList.aggs))
    } catch (error) {
      console.log(error)
    }
  }
}

// 当前tab
export function activeTabBarChange(val) {
  return {
    type: searchActionTypes.ACTIVE_TAB_BAR_CHANGE,
    payload: val
  }
}

// 当前可视化
export function currentReportChange(val) {
  return {
    type: searchActionTypes.CURRENT_REPORT_CHANGE,
    payload: val
  }
}

const getResearchTrendSucc = (data) => {
  return {
    type: searchActionTypes.RESEARCH_TREND_SUCC,
    payload: data
  }
}
const getHighAuthorSucc = (data) => {
  return {
    type: searchActionTypes.HIGH_AUTHOR_SUCC,
    payload: data
  }
}
const getHighOrgSucc = (data) => {
  return {
    type: searchActionTypes.HIGH_ORG_SUCC,
    payload: data
  }
}
const getProjectTrendSucc = (data) => {
  return {
    type: searchActionTypes.PROJECT_TREND_SUCC,
    payload: data
  }
}
