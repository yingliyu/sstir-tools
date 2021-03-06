import React from 'react'
import { Space, Button } from 'antd'
import css from './index.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'
// import Loading from '@/components/loading'

const mapStateToProps = (state) => {
  return {
    isLoading: state.getIn(['search', 'isLoading']),
    fieldList: state.getIn(['search', 'fieldList']),
    activeField: state.getIn(['search', 'activeField']),
    researchTrendList: state.getIn(['search', 'researchTrendList']),
    highAuthorList: state.getIn(['search', 'highAuthorList']),
    highOrgList: state.getIn(['search', 'highOrgList']),
    projectTrendList: state.getIn(['search', 'projectTrendList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fieldAction: bindActionCreators(searchActionCreator, dispatch)
  }
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class ResearchArea extends React.Component {
  // 切换领域
  changeCurrentField(index) {
    this.props.fieldAction.activeFieldChangeCreator(index)
    this.props.fieldAction.activeTabBarChange(1)
    this.props.fieldAction.currentReportChange(0)
    this.props.fieldAction.getTabContentByField()
  }
  render() {
    const { fieldList, activeField, isLoading } = this.props
    return (
      <div className={css['field-wrapper']}>
        <span className={css['field-label']}>研究领域：</span>
        {(() => {
          if (fieldList.length) {
            return (
              <Space>
                {fieldList.map((item, index) => (
                  <Button
                    className={index === activeField ? css['active-field'] : ''}
                    shape="round"
                    key={item.keyword}
                    onClick={() => this.changeCurrentField(index)}
                  >
                    {item.keyword}
                  </Button>
                ))}
              </Space>
            )
          } else if (isLoading) {
            return ''
          } else {
            return '暂无数据'
          }
        })()}
      </div>
    )
  }
}

export default ResearchArea
