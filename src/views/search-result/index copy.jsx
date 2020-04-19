import React, { useState, useEffect } from 'react'
import { Button, Tabs, Row, Col } from 'antd'
const { TabPane } = Tabs
import css from './index.module.less'
import SearchInput from '@/components/search-input'
import ResearchAreas from '@/components/research-areas'
import FoundProjects from './found-projects'
import { Link, useLocation } from 'react-router-dom'
// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search)
}
console.log(useQuery)

export default function SearchReasult() {
  const [activeBar, changeActive] = useState('1')
  let [createBarExtraContent] = useState('<Button>论文检索</Button>')
  console.log(createBarExtraContent)

  useEffect(() => {
    createBarExtraContent = () => {
      return <Button>论文检索</Button>
    }
  })
  return (
    <div className={css['search-list-wrapper']}>
      <div className={css['search-main-wrapper']}>
        <h2>开始测评</h2>
        <SearchInput />
        <ResearchAreas />

        <div className={css['tab-wrapper']}>
          <Tabs
            activeKey={activeBar}
            tabBarExtraContent={
              <Button type="primary" shape="round">
                论文检索
              </Button>
            }
            onChange={changeActive}
          >
            <TabPane tab="可视化分析" key="1" forceRender={false}>
              <Row gutter={16}>
                <Col className={css['gutter-row']} span={8}>
                  <Link to="/search/list/1/2">
                    <div className={css['report-item']}>论文-研究走势</div>
                  </Link>
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
            <TabPane tab="基金项目" key="3">
              <FoundProjects />
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
