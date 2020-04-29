import { searchActionTypes, appActionTypes } from '@/store/action-types'
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
    type: searchActionTypes.ERR_MSG_SHOW,
    errorMsg: msg
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
      if (list && list.length) {
        dispatch(showNoFieldTipsChange(false))
        dispatch(searchFieldSucc(list))
        dispatch(getTabContentByField())
      } else {
        dispatch(showNoFieldTipsChange(true))
      }
      // dispatch(activeFieldChange(0))
      // dispatch(activeTabBarChange(1))
      // dispatch(currentReportChange(0))
    } catch (error) {
      dispatch(searchFieldError(error))
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

const searchReportStart = () => {
  return {
    type: searchActionTypes.RESEARCH_TREND_START
  }
}
const searchReportError = (msg) => {
  return {
    type: appActionTypes.ERR_MSG_SHOW,
    errorMsg: msg
  }
}
// 通过'领域'获取可视化数据
export function getTabContentByField() {
  return async (dispatch, getState) => {
    dispatch(searchReportStart())
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
      dispatch(getHighAuthorSucc(relateAuthorList.aggs.concat([{ key: activeFieldName }])))
      const highOrgData = highOrgList.aggs.map((item) => ({
        count: item.count,
        key: item.key.length > 20 ? item.key.slice(0, 20) + '...' : item.key
      }))

      dispatch(getHighOrgSucc(highOrgData))
      const chartData = projectTrendList.aggs.map((item) => ({
        key: item.key,
        count: item.count,
        project_money: parseInt(item.project_money, 10)
      }))
      dispatch(getProjectTrendSucc(chartData))
    } catch (error) {
      dispatch(searchReportError(error))
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
