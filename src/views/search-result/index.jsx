import React from 'react'
// import { Space, Button, Tabs, Row, Col } from 'antd'
import { Space, Button, Tabs } from 'antd'
const { TabPane } = Tabs
import css from './index.module.less'
import SearchInput from '@/components/search-input'
function callback(key) {
  console.log(key)
}
export default function SearchReasult() {
  return (
    <div className={css['search-list-wrapper']}>
      <div className={css['banner-wrapper']}>
        <h2>科研助手</h2>
      </div>

      <div className={css['search-main-wrapper']}>
        <h2>开始测评</h2>
        <SearchInput />
        <div className={css['field-wrapper']}>
          <span className={css['field-label']}>研究领域：</span>
          <Space>
            <Button type="primary" shape="round">
              人工智能
            </Button>
            <Button shape="round">数据挖掘</Button>
            <Button shape="round">聚类</Button>
          </Space>
        </div>
        <div className={css['tab-wrapper']}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
          {/* <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="可视化分析" key="1">
              <Row gutter={16}>
                <Col className={css['gutter-row']} span={8}>
                  <div className={css['report-item']}>论文-研究走势</div>
                </Col>
                <Col span={8} className={css['gutter-row']}>
                  <div className={css['report-item']}>论文-关联研究</div>
                </Col>
                <Col span={8} className={css['gutter-row']}>
                  <div className={css['report-item']}>论文-高发作者</div>
                </Col>
              </Row>
              <br />
              <Row gutter={16}>
                <Col className={css['gutter-row']} span={8}>
                  <div className={css['report-item']}>论文-高发文机构</div>
                </Col>
                <Col span={8} className={css['gutter-row']}>
                  <div className={css['report-item']}>科研获批趋势</div>
                </Col>
                <Col span={8} />
              </Row>
            </TabPane>
            <TabPane tab="论文" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="数据挖掘" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs> */}
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  )
}
