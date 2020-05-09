import React from 'react'
import { Form, Input } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
const { Search } = Input
import css from './index.module.less'
import { searchActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state) => {
  // console.log('map', state.getIn(['search', 'fieldList']))
  return {
    searchInputVal: state.getIn(['search', 'searchInputVal']),
    fieldList: state.getIn(['search', 'fieldList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    inputAction: bindActionCreators(searchActionCreator, dispatch)
  }
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.handelOnChange = this.handelOnChange.bind(this)
    // this.handleClick = this.handleClick.bind(this)
  }

  handelOnChange(e) {
    this.props.inputAction.searchInputChangeCreator(encodeURIComponent(e.target.value))
  }

  render() {
    const { searchInputVal, onSearchClick } = this.props

    return (
      <div className={css['search-input-wrapper']}>
        <Form name="search">
          <Form.Item label="科研选题：">
            <Search
              placeholder="请输入检索词，简短的检索词可以找到更多信息"
              enterButton="搜索"
              size="large"
              ref={(ele) => {
                this.searchInputVal = ele
              }}
              value={decodeURIComponent(searchInputVal)}
              onSearch={onSearchClick}
              onChange={this.handelOnChange}
            />
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default SearchInput
