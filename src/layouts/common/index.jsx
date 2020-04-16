import React from 'react'
import CommonHeader from '@/components/header'
import CommonFooter from '@/components/footer'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout
import css from './index.module.less'
export default function LayoutCommon(props) {
  console.log(props)

  return (
    <div className={css['layout-wrapper']}>
      <Header>
        <CommonHeader />
      </Header>
      <Content>
        <div className={css['banner-wrapper']}>
          <h2>科 研 选 题 分 析 助 手 试 用 版</h2>
          <p>收录国家自然科学基金、长三角科技部门指南政策、基金项目数据，可视化科研选题分析</p>
        </div>
        <div className={css['main-inner']}>
          <div className={css['inner-container']}>{props.children}</div>
        </div>
      </Content>
      <Footer>
        <CommonFooter />
      </Footer>
    </div>
  )
}
