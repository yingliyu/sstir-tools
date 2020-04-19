import React, { useState, useEffect } from 'react'
import { Button, Tabs } from 'antd'
const { TabPane } = Tabs
import css from './index.module.less'
import SearchInput from '@/components/search-input'
import ResearchAreas from '@/components/research-areas'
import FoundProjects from './found-projects'
import ReportHeader from './report-header'
import ReportThumb from './report-thumb'
import SearchTrend from '@/views/report/line-area'
import HighAuthor from '@/views/report/graph'
import HighOrg from '@/views/report/bar-flat'
import ProjectTrend from '@/views/report/bar-line'
import { BrowserRouter as Router, useLocation } from 'react-router-dom'

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  return new URLSearchParams(useLocation().search)
}
export default function SearchReasult() {
  const [activeBar, changeActive] = useState('1')
  // let [createBarExtraContent] = useState('<Button>论文检索</Button>')

  useEffect(() => {
    // createBarExtraContent = () => {
    //   return <Button>论文检索</Button>
    // }
  }, [])

  let query = useQuery()
  const whichVisual = query.get('type')
  const queryKey = query.get('q')

  return (
    <div className={css['search-list-wrapper']}>
      <Router>
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
                {(() => {
                  switch (whichVisual) {
                    case '1':
                      return (
                        <div>
                          <ReportHeader
                            curType="1"
                            queryKey={queryKey}
                            title="研究走势"
                            visualTitle="历年发文量"
                            desc=" #人工智能#从1956年开始出现相关研究，2016年达到最热，至今共有2237篇相关论文。"
                          />
                          <SearchTrend data={[]} />
                        </div>
                      )
                    case '2':
                      return (
                        <div>
                          <ReportHeader
                            curType="2"
                            queryKey={queryKey}
                            title="相关学者"
                            visualTitle="高发文作者"
                            desc=""
                          />
                          <HighAuthor data={[]} />
                        </div>
                      )
                    case '3':
                      return (
                        <div>
                          <ReportHeader
                            curType="3"
                            queryKey={queryKey}
                            title="高发文机构"
                            visualTitle="高发文机构及发文数量"
                            desc=""
                          />
                          <HighOrg data={[]} />
                        </div>
                      )
                    case '4':
                      return (
                        <div>
                          <ReportHeader
                            curType="4"
                            queryKey={queryKey}
                            title="项目获批趋势"
                            visualTitle="项目获批数量及金额趋势"
                            desc=""
                          />
                          <ProjectTrend data={[]} />
                        </div>
                      )
                    default:
                      return <ReportThumb queryKey={queryKey} />
                  }
                })()}
              </TabPane>
              <TabPane tab="论文" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="基金项目" key="3">
                <FoundProjects data={[]} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </Router>
    </div>
  )
}
