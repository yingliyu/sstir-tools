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
        <div className={css['main-inner']}>{props.children}</div>
      </Content>
      <Footer>
        <CommonFooter />
      </Footer>
    </div>
  )
}
