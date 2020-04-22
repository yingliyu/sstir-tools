import React from 'react'
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
import store from '@/store'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'

// import { searchApi } from '@/services'
const mapStateToProps = (state) => {
  return {
    searchInputVal: state.getIn(['search', 'searchInputVal']),
    fieldList: state.getIn(['search', 'fieldList']),
    activeField: state.getIn(['search', 'activeField']),
    activeTabBar: state.getIn(['search', 'activeTabBar']),
    currentReport: state.getIn(['search', 'currentReport']),
    researchTrendList: state.getIn(['search', 'researchTrendList']),
    highAuthorList: state.getIn(['search', 'highAuthorList']),
    highOrgList: state.getIn(['search', 'highOrgList']),
    projectTrendList: state.getIn(['search', 'projectTrendList'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchResultAction: bindActionCreators(searchActionCreator, dispatch)
  }
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class SearchReasult extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    // if (!this.props.location.state.q) {
    //   this.props.history.push({
    //     pathname: '/'
    //   })
    // }
    this.getFielList()
  }
  changeActiveTabBar(key) {
    this.props.searchResultAction.activeTabBarChange(key)
    this.props.searchResultAction.getTabContentByField()
  }

  // 获取领域
  async getFielList() {
    this.props.searchResultAction.getFieldListCreator()
  }

  clickReportHandle(val) {
    console.log(val)

    this.props.searchResultAction.currentReportChange(val)
  }
  render() {
    const {
      fieldList,
      activeField,
      activeTabBar,
      currentReport,
      researchTrendList
      // highAuthorList,
      // highOrgList,
      // projectTrendList
    } = this.props
    console.log('结果也===', researchTrendList)
    console.log('结果也===', researchTrendList.length)
    const fieldKey = fieldList[activeField]?.keyword
    const researchTrendLists = researchTrendList.length ? researchTrendList : []
    return (
      <div className={css['search-list-wrapper']}>
        <div className={css['search-main-wrapper']}>
          <h2>开始测评</h2>
          <SearchInput onSearchClick={() => this.getFielList()} />
          <ResearchAreas list={[]} name="lemonyu" />

          <div className={css['tab-wrapper']}>
            <Tabs
              activeKey={activeTabBar.toString()}
              tabBarExtraContent={
                <Button type="primary" shape="round">
                  论文检索
                </Button>
              }
              onChange={(key) => this.changeActiveTabBar(key)}
            >
              <TabPane tab="可视化分析" key="1">
                {(() => {
                  switch (currentReport) {
                    case 1:
                      return (
                        <div>
                          <ReportHeader
                            curType="1"
                            fieldKey={fieldKey}
                            title="研究走势"
                            visualTitle="历年发文量"
                            desc={` ${fieldKey} 从1956年开始出现相关研究，2016年达到最热，至今共有2237篇相关论文。`}
                          />
                          <SearchTrend data={researchTrendLists} />
                        </div>
                      )
                    case 2:
                      return (
                        <div>
                          <ReportHeader
                            curType="2"
                            fieldKey={fieldKey}
                            title="相关学者"
                            visualTitle="高发文作者"
                            desc=""
                          />
                          <HighAuthor data={[]} />
                        </div>
                      )
                    case 3:
                      return (
                        <div>
                          <ReportHeader
                            curType="3"
                            fieldKey={fieldKey}
                            title="高发文机构"
                            visualTitle="高发文机构及发文数量"
                            desc=""
                          />
                          <HighOrg data={[]} />
                        </div>
                      )
                    case 4:
                      return (
                        <div>
                          <ReportHeader
                            curType="4"
                            fieldKey={fieldKey}
                            title="项目获批趋势"
                            visualTitle="项目获批数量及金额趋势"
                            desc=""
                          />
                          <ProjectTrend data={[]} />
                        </div>
                      )
                    default:
                      return <ReportThumb fieldKey={fieldKey} />
                  }
                })()}
              </TabPane>
              {/* <TabPane tab="论文" key="2">
                Content of Tab Pane 2
              </TabPane> */}
              <TabPane tab="基金项目" key="2">
                <FoundProjects data={[]} />
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default SearchReasult
