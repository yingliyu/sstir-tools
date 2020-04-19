import React from 'react'
import css from './index.module.less'
import logo from './img/logo.png'
import { Space, Divider } from 'antd'
export default function Head() {
  return (
    <div className={css['header-wrapper']}>
      <img src={logo} />
      <Space>
        <a href="http://www.sstir.cn" target="_blank">
          数据中心首页
        </a>
        <Divider type="vertical" style={{ color: '#999' }} />
        <a href="http://www.sstir.cn/register" target="_blank">
          注册
        </a>
      </Space>
    </div>
  )
}
