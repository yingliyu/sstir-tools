import React from 'react'
import css from './index.module.less'
import SearchInput from '@/components/search-input'
import { Divider, Modal, Button } from 'antd'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'
// import store from '@/store'
const mapStateToProps = (state) => {
  // console.log('map', state.getIn(['search', 'fieldList']))
  return {
    searchInputVal: state.getIn(['search', 'searchInputVal'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    homeAction: bindActionCreators(searchActionCreator, dispatch)
  }
}

@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  hideModal() {
    this.setState((state) => ({
      visible: false
    }))
  }
  searchHandle(val) {
    this.props.history.push({
      pathname: '/search/field',
      state: { q: val, activeTabBar: 1 }
    })
  }
  render() {
    console.log('home', this)
    const { searchInputVal } = this.props
    return (
      <div className={css['home-wrapper']}>
        {/* <div className={css['banner-wrapper']}>
          <h2>科 研 选 题 分 析 助 手 试 用 版</h2>
          <p>收录国家自然科学基金、长三角科技部门指南政策、基金项目数据，可视化科研选题分析</p>
        </div> */}
        <div className={css['home-main']}>
          <h2>开始测评</h2>
          <SearchInput onSearchClick={() => this.searchHandle(searchInputVal)} />
          <div className={css['tips-wrapper']}>
            <Divider
              type="vertical"
              style={{ width: '5px', backgroundColor: '#90c0f4', marginLeft: 0 }}
            />
            <span>温馨提示：</span>
            <div className={css['tips-desc']}>
              <h4>科研选题分析助手：</h4>
              <ul>
                <li>从最新研究文献趋势看选题</li>
                <li>从基金项目趋势看选题</li>
              </ul>
            </div>
          </div>
        </div>
        <Modal
          title="温馨提示"
          closable={false}
          visible={this.state.visible}
          onOk={() => this.hideModal}
          centered="true"
          footer={null}
          wrapClassName={css['tips-modal-wrapper']}
        >
          <p>感谢您信任和使用科研选题分析助手，</p>
          <p>我们依据最新的法律要求，将向您本次提示：</p>
          <p>
            我们将一直采取行业领先的安全防护措施来保护您的信息安全，我们会依据您使用或试用服务的具体功能收集使用信息
            （可能涉及账户、个人信息、设备等相关信息），我们不会向任何第三方提供您的信息，除非得到您的授权及法律要求。
          </p>
          <p>科研选题分析助手的结果仅供参考，本平台不承担因数据准确性引起的任何法律责任。</p>
          <div className={css['confirm-wrapper']}>
            <Button type="primary" onClick={() => this.hideModal(false)}>
              确认
            </Button>
          </div>
        </Modal>
      </div>
    )
  }
}
export default Home
