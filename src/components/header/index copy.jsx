import React from 'react'
import { Space, Divider, Menu, Dropdown, Button, Modal } from 'antd'
import css from './index.module.less'
import logo from './img/logo.png'
import Cookies from 'js-cookie'
import Urls from '@/utils/url-creator'

export default class Head extends React.Component {
  state = { visible: false }

  showModal() {
    this.setState({
      visible: true
    })
  }

  handleOk() {
    // 清token退出登录
    const token = Cookies.get('token')
    if (token) {
      if (Urls.domain) {
        Cookies.remove('token', { domain: Urls.domain })
      } else {
        Cookies.remove('token')
      }
    }
    window.location.href = Urls.casLoginout + encodeURIComponent(Urls.indexUrl)
    this.setState({
      visible: false
    })
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
          <a
            target="_blank"
            rel="noopener noreferrer"
            // href="http://www.sstir.cn/user"
            onClick={this.showModal}
          >
            退出
          </a>
        </Menu.Item>
      </Menu>
    )
    return (
      <div className={css['header-wrapper']}>
        <img src={logo} />
        <Space>
          <a href="http://www.sstir.cn" target="_blank">
            数据中心首页
          </a>
          <Divider type="vertical" style={{ color: '#999' }} />
          <a href="http://www.sstir.cn/register" target="_blank">
            登录
          </a>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button type="primary">lemonyu</Button>
          </Dropdown>
        </Space>
        <Modal
          title="提示"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>此操作将退出登录，是否继续？</p>
        </Modal>
      </div>
    )
  }
}
