import React from 'react'
import CommonHeader from '@/components/header'
import CommonFooter from '@/components/footer'
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout
import css from './index.module.less'
export default function LayoutCommon() {
  return (
    <div className={css['lauout-wrapper']}>
      <Header>
        <CommonHeader />
      </Header>
      <Content>Home content</Content>
      <Footer>
        <CommonFooter />
      </Footer>
    </div>
  )
}
