import React from 'react'
import { Space, Button } from 'antd'
import css from './index.module.less'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  return {
    fieldList: state.getIn(['search', 'fieldList']),
    activeField: state.getIn(['search', 'activeField'])
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
    this.props.fieldAction.getTabContentByField()
  }
  render() {
    const { fieldList, activeField } = this.props

    return (
      <div className={css['field-wrapper']}>
        <span className={css['field-label']}>研究领域：</span>
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
          {/* <Button className={css['active-field']} shape="round" onClick={this.changeCurrentField}>
            hahah
          </Button> */}
        </Space>
      </div>
    )
  }
}

export default ResearchArea
