import React from 'react'
import { Space, Divider, Menu, Dropdown, Button, Modal } from 'antd'
import css from './index.module.less'
import logo from './img/logo.png'
import Cookies from 'js-cookie'
import Urls from '@/utils/url-creator'

export default class Head extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: false, token: '', userInfo: {} }
    this.showModal = this.showModal.bind(this)
    this.handleOk = this.handleOk.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
  }

  componentDidMount() {
    // 获取用户信息
    this.setState(() => ({
      token: Cookies.get('token')
    }))
  }

  showModal() {
    this.setState((state) => ({
      visible: true
    }))
  }

  handleOk() {
    this.setState((state) => ({
      visible: false
    }))
    // 清token退出登录
    const token = Cookies.get('token')
    if (token) {
      if (Urls.domain) {
        Cookies.remove('token', { domain: Urls.domain })
      } else {
        Cookies.remove('token')
      }
    }
    location = '/'
    // console.log(Urls.casLoginout + encodeURIComponent(Urls.indexUrl))
    // window.location.href = Urls.casLoginout + encodeURIComponent(Urls.indexUrl)
  }

  handleCancel() {
    this.setState({
      visible: false
    })
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.sstir.cn/user">
            用户中心
          </a>
        </Menu.Item>
        <Menu.Item>
          <span onClick={this.showModal}>退出</span>
        </Menu.Item>
      </Menu>
    )
    const { token, userInfo } = this.state
    return (
      <div className={css['header-wrapper']}>
        <img src={logo} />
        <Space>
          <a href="http://www.sstir.cn" target="_blank">
            数据中心首页
          </a>
          <Divider type="vertical" style={{ color: '#999' }} />
          {token ? (
            <Dropdown overlay={menu} placement="bottomRight">
              <Button type="primary">{userInfo.userName}</Button>
            </Dropdown>
          ) : (
            <a href="http://www.sstir.cn/register" target="_blank">
              登录
            </a>
          )}
        </Space>
        <Modal
          title="提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText="取消"
          okText="确定"
        >
          <p>此操作将退出登录，是否继续？</p>
        </Modal>
      </div>
    )
  }
}
