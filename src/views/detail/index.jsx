import React from 'react'
// import { message } from 'antd'
import css from './index.module.less'
import commLoginUtil from '@/utils/login-transfer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fundActionCreator, userActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'
const mapStateToProps = (state) => {
  return {
    fundProjectDetail: state.getIn(['fund', 'fundProjectDetail']),
    showLoginTips: state.getIn(['user', 'showLoginTips']),
    userInfo: state.getIn(['user', 'userInfo'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fundAction: bindActionCreators(fundActionCreator, dispatch),
    userAction: bindActionCreators(userActionCreator, dispatch)
  }
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class fundProjectDetail extends React.Component {
  componentDidMount() {
    this.props.userAction.getUserInfoCreator()
    if (!this.props.fundProjectDetail) {
      this.getFundProjectDetail()
    }
  }
  getFundProjectDetail() {
    const projectId = this.props.match.params.projectId
    this.props.fundAction.fundProjectDetailChangeCreator(projectId)
  }
  toLogin() {
    // 去登录
    this.props.userAction.showLoginTipsToggle(false)
    commLoginUtil.loginMethod()
  }

  render() {
    const data = this.props.fundProjectDetail ? this.props.fundProjectDetail : {}
    // const {
    //   // showLoginTips,
    //   // userInfo
    //   // userAction: { showLoginTipsToggle }
    // } = this.props
    return (
      <div className={css['search-detail-wrapper']}>
        <h2>{data.title}</h2>
        {/* {userInfo && userInfo !== null ? ( */}
        <div className={css['detail-items-wrapper']}>
          <ul>
            <li>
              <p>
                <span>批准号：</span>
                <span>{data.pid || '无'}</span>
              </p>
              <p>
                <span>项目负责人：</span>
                <span>{data.leader || '无'}</span>
              </p>
              <p>
                <span>资助金额：</span>
                <span>
                  {data.project_money && data.project_money !== ''
                    ? data.project_money + '万元'
                    : '无'}
                </span>
              </p>
            </li>

            <li>
              <p>
                <span>批准年度：</span>
                <span>{data.appro_year || '无'}</span>
              </p>
              <p>
                <span>负责人职称：</span>
                <span>{data.leader_title || '无'}</span>
              </p>
              <p>
                <span>项目类别：</span>
                <span>{data.project_type || '无'}</span>
              </p>
            </li>

            <li>
              <p>
                <span>学科分类：</span>
                <span>{data.subj_code || '无'}</span>
              </p>
              <p>
                <span>依托单位：</span>
                <span>{data.unit || '无'}</span>
              </p>
              <p>
                <span>研究期限：</span>
                <span>{data.exec_date || '无'}</span>
              </p>
            </li>
          </ul>
          <p>
            <span>中文主题词：</span>
            {data.keywords && data.keywords.length ? (
              <span>{data.keywords.map((item) => item + '；')}</span>
            ) : (
              '无'
            )}
          </p>
          <p>
            <span>英文主题词：</span>
            {data.keywords_en && data.keywords_en.length ? (
              <span>{data.keywords_en.map((item) => item + '；')}</span>
            ) : (
              '无'
            )}
          </p>
          <div className={css['summary-wrapper']}>
            {data.conclusion_abs ? (
              <>
                <h4>基金摘要：</h4>
                <p>{data.conclusion_abs}</p>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        {/* // ) : (
        //   setTimeout(() => commLoginUtil.loginMethod(), 2000)
        // ) */}
        {/* } */}
      </div>
    )
  }
}
export default fundProjectDetail
