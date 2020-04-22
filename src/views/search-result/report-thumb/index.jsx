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
  // const activeField = props.fieldKey
  // console.log(props)
  // const visualList = [
  //   {
  //     name: '论文-研究走势'
  //   },
  //   {
  //     name: '论文-高发作者'
  //   },
  //   {
  //     name: '论文-高发文机构'
  //   },
  //   {
  //     name: '科研获批趋势'
  //   }
  // ]
  // console.log(visualList)
  reportClickHandle(val) {
    // console.log(val)
    const { activeField } = this.props
    // console.log('activeField==', activeField)

    this.props.reportAction.currentReportChange(val)
    this.props.history.push({
      pathname: '/search/field',
      state: {
        activeField: activeField,
        currentReport: val
      }
    })
  }
  render() {
    // console.log(this.props)
    const { activeField } = this.props
    return (
      <div className={css['report-thumb-wrapper']}>
        <Row gutter={16}>
          <Col className={css['gutter-row']} span={12} onClick={() => this.reportClickHandle(1)}>
            <Link to={`/search/field?q=${activeField}&type=1`}>
              <div className={css['report-item']}>论文-研究走势</div>
            </Link>
          </Col>

          <Col span={12} className={css['gutter-row']} onClick={() => this.reportClickHandle(2)}>
            <Link to={`/search/field?q=${activeField}&type=2`}>
              <div className={css['report-item']}>论文-高发作者</div>
            </Link>
          </Col>
        </Row>
        <br />
        <Row gutter={16}>
          <Col className={css['gutter-row']} span={12} onClick={() => this.reportClickHandle(3)}>
            <Link to={`/search/field?q=${activeField}&type=3`}>
              <div className={css['report-item']}>论文-高发文机构</div>
            </Link>
          </Col>
          <Col span={12} className={css['gutter-row']} onClick={() => this.reportClickHandle(4)}>
            <Link to={`/search/field?q=${activeField}&type=4`}>
              <div className={css['report-item']}>科研获批趋势</div>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}

export default ReportThumb
