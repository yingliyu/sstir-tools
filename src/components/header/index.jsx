import React from 'react'
import { Space, Divider, Menu, Dropdown, Button, Modal } from 'antd'
import css from './index.module.less'
import logo from './img/logo.png'
// import Cookies from 'js-cookie'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'
const mapStateToProps = (state) => {
  return {
    userInfo: state.getIn(['user', 'userInfo']),
    showLoginTips: state.getIn(['user', 'showLoginTips']),
    showLogoutModal: state.getIn(['user', 'showLogoutModal'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userAction: bindActionCreators(userActionCreator, dispatch)
  }
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class Header extends React.Component {
  componentDidMount() {
    // 获取用户信息
    this.props.userAction.getUserInfoCreator()
  }

  logoutModalHandleOk() {
    // 退出登录
    this.props.userAction.logoutActionCreator()
  }

  render() {
    const {
      showLogoutModal,
      userAction: { showLogoutTipsToggle }
    } = this.props

    const { userInfo } = this.props
    return (
      <div className={css['header-wrapper']}>
        <img src={logo} />
        <Space>
          <a href="http://www.sstir.cn" target="_blank">
            数据中心首页
          </a>
          <Divider type="vertical" style={{ color: '#999' }} />
          {userInfo ? (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.sstir.cn/user">
                      用户中心
                    </a>
                  </Menu.Item>
                  <Menu.Item onClick={() => showLogoutTipsToggle(true)}>
                    <span>退出</span>
                  </Menu.Item>
                </Menu>
              }
              placement="bottomRight"
            >
              <Button type="primary">{userInfo.logName}</Button>
            </Dropdown>
          ) : (
            <a href="http://www.sstir.cn/register" target="_blank">
              登录
            </a>
          )}
        </Space>
        <Modal
          title="提示"
          closable={false}
          visible={showLogoutModal}
          onOk={() => this.logoutModalHandleOk()}
          onCancel={() => showLogoutTipsToggle(false)}
          cancelText="取消"
          okText="确定"
        >
          <p>此操作将退出登录，是否继续？</p>
        </Modal>
      </div>
    )
  }
}
export default Header
