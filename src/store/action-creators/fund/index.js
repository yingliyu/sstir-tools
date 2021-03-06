import { fundActionTypes, appActionTypes } from '@/store/action-types'
import { searchApi } from '@/services'
import { userActionCreator } from '@/store/action-creators'
// import commLoginUtil from '@/utils/login-transfer'
// import { message } from 'antd'
// 基金项目当前页
const fundCurrentPageChange = (val) => {
  return {
    type: fundActionTypes.FUND_CURRENT_PAGE_CHANGE,
    payload: val
  }
}
// 排序方式改变
const sortTypeChange = (val) => {
  return {
    type: fundActionTypes.FUND_SORT_CHANGE,
    payload: val
  }
}
// 基金项目loading
const getFundListStart = () => {
  return {
    type: fundActionTypes.FUND_LIST_START
  }
}
// 基金项目列表
const getFundListSucc = (data) => {
  return {
    type: fundActionTypes.FUND_LIST_SUCC,
    payload: data
  }
}
const getFundListError = (data) => {
  return {
    type: appActionTypes.ERR_MSG_SHOW,
    errorMsg: data
  }
}
const getFundDetailError = (data) => {
  return {
    type: appActionTypes.ERR_MSG_SHOW,
    errorMsg: data
  }
}
// 基金项目总页数
const fundPageTotalChange = (val) => {
  return {
    type: fundActionTypes.FUND_PAGE_TOTAL_CHANGE,
    payload: val
  }
}

// 基金项目总数
const fundProjectTotalChange = (val) => {
  return {
    type: fundActionTypes.FUND_PROJECT_TOTAL_CHANGE,
    payload: val
  }
}
// 基金项目详情
const getFundProjectDetailSucc = (val) => {
  return {
    type: fundActionTypes.FUND_PROJECT_DETAIL_CHANGE,
    payload: val
  }
}
// 通过'领域'获取基金项目列表
export function fundProjectListChangeCreator() {
  return async (dispatch, getState) => {
    dispatch(getFundListStart())
    try {
      const activeField = getState().getIn(['search', 'activeField'])
      const fieldList = getState().getIn(['search', 'fieldList'])
      const activeFieldName = fieldList[activeField]?.keyword
      const currentPage = getState().getIn(['fund', 'fundCurrentPage'])
      const fundSortType = getState().getIn(['fund', 'fundSortType'])

      const fundProjectParam = {
        q: encodeURIComponent(activeFieldName),
        start: (currentPage - 1) * 10,
        rows: 10,
        sort: fundSortType
      }
      const fundList = await searchApi.getFundLists(fundProjectParam)
      dispatch(getFundListSucc(fundList.data))
      dispatch(fundPageTotalChange(Math.ceil(fundList.total / 10)))
      dispatch(fundProjectTotalChange(fundList.total))
    } catch (error) {
      console.log(error)
      dispatch(getFundListError(error))
      if (error.includes('未登录')) {
        dispatch(userActionCreator.showLoginTipsToggle(true))
      }
    }
  }
}
// 翻页
export function fundCurrentPageChangeCreator(val) {
  return async (dispatch) => {
    dispatch(fundCurrentPageChange(val))
  }
}

// 基金项目排序
export function fundSortTypeChangeCreator(val) {
  return (dispatch) => {
    dispatch(sortTypeChange(val))
  }
}

// 基金项目详情
export function fundProjectDetailChangeCreator(projectId) {
  return async (dispatch) => {
    try {
      const data = await searchApi.getFundDetail({ q: projectId })
      dispatch(getFundProjectDetailSucc(data.data[0].source))
      // console.log(data.data[0].source)
    } catch (error) {
      console.log(error)
      // if (error.includes('未登录')) {
      //   message.error('您的用户信息已过期，即将跳转至登录！')
      //   // setTimeout(commLoginUtil.loginMethod(), 3000)
      // }
      dispatch(getFundDetailError(error))
    }
  }
}
