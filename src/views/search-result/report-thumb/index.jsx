import React from 'react'
import { Row, Col } from 'antd'
import css from './index.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActionCreator } from '@/store/action-creators'
import { withRouter, Link } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    activeField: state.getIn(['search', 'activeField']),
    currentReport: state.getIn(['search', 'currentReport'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reportAction: bindActionCreators(searchActionCreator, dispatch)
  }
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class ReportThumb extends React.Component {
  reportClickHandle(val) {
    this.props.reportAction.currentReportChange(val)
  }
  render() {
    const { searchInputVal } = this.props
    return (
      <div className={css['report-thumb-wrapper']}>
        <Row gutter={16}>
          <Col className={css['gutter-row']} span={12} onClick={() => this.reportClickHandle(1)}>
            <Link to={`/search/field?q=${searchInputVal}`}>
              <div className={css['report-item']}>论文-研究走势</div>
            </Link>
          </Col>
          <Col className={css['gutter-row']} span={12} onClick={() => this.reportClickHandle(2)}>
            <Link to={`/search/field?q=${searchInputVal}`}>
              <div className={css['report-item']}>论文-高发文机构</div>
            </Link>
          </Col>
          {/* <Col span={12} className={css['gutter-row']} onClick={() => this.reportClickHandle(2)}>
            <Link to={`/search/field/${searchInputVal}`}>
              <div className={css['report-item']}>论文-高发文作者</div>
            </Link>
          </Col> */}
        </Row>
        <br />
        <Row gutter={16}>
          <Col className={css['gutter-row']} span={12} onClick={() => this.reportClickHandle(3)}>
            <Link to={`/search/field?q=${searchInputVal}`}>
              <div className={css['report-item']}>项目获批数量</div>
            </Link>
          </Col>
          <Col span={12} className={css['gutter-row']} onClick={() => this.reportClickHandle(4)}>
            <Link to={`/search/field?q=${searchInputVal}`}>
              <div className={css['report-item']}>项目获批金额</div>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ReportThumb
