import React from 'react'
import { Button, Tabs, Modal, message, Spin } from 'antd'
const { TabPane } = Tabs
import css from './index.module.less'
import SearchInput from '@/components/search-input'
import ResearchAreas from './research-areas'
import FoundProjects from './found-projects'
import ReportHeader from './report-header'
import ReportThumb from './report-thumb'
import ChartLine from '@/components/charts/line'
// import HighAuthor from '@/components/charts/graph'
import HighOrg from '@/components/charts/bar-flat'
import ChartBar from '@/components/charts/bar'
import urls from '@/utils/url-creator'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActionCreator, fundActionCreator, userActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'
import commLoginUtil from '@/utils/login-transfer'
const mapStateToProps = (state) => {
  return {
    searchInputVal: state.getIn(['search', 'searchInputVal']),
    showNoFieldTips: state.getIn(['search', 'showNoFieldTips']),
    isLoading: state.getIn(['search', 'isLoading']),
    fieldList: state.getIn(['search', 'fieldList']),
    activeField: state.getIn(['search', 'activeField']),
    activeTabBar: state.getIn(['search', 'activeTabBar']),
    currentReport: state.getIn(['search', 'currentReport']),
    reportLoading: state.getIn(['search', 'reportLoading']),
    researchTrendList: state.getIn(['search', 'researchTrendList']),
    // highAuthorList: state.getIn(['search', 'highAuthorList']),
    highOrgList: state.getIn(['search', 'highOrgList']),
    projectTrendList: state.getIn(['search', 'projectTrendList']),
    fundList: state.getIn(['fund', 'fundList']),
    fundListErrMsg: state.getIn(['fund', 'errMsg']),
    fundSortType: state.getIn(['fund', 'fundSortType']),
    fundCurrentPage: state.getIn(['fund', 'fundCurrentPage']),
    fundPageTotal: state.getIn(['fund', 'fundPageTotal']),
    fundListTotal: state.getIn(['fund', 'fundListTotal']),
    fundProjectDetail: state.getIn(['fund', 'fundProjectDetail']),
    showLoginTips: state.getIn(['user', 'showLoginTips']),
    userInfo: state.getIn(['user', 'userInfo'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchResultAction: bindActionCreators(searchActionCreator, dispatch),
    fundAction: bindActionCreators(fundActionCreator, dispatch),
    userAction: bindActionCreators(userActionCreator, dispatch)
  }
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class SearchReasult extends React.Component {
  componentDidMount() {
    if (!this.props.searchInputVal) {
      const searchInputVal = this.getQueryValue('q')
      // this.props.location.state.q ? this.props.location.state.q : ''
      // this.props.match.params && this.props.match.params.q ? this.props.match.params.q : ''
      this.props.searchResultAction.searchInputChangeCreator(searchInputVal)
      this.getFielList(searchInputVal)
    } else {
      this.getFielList(this.props.searchInputVal)
    }
  }
  /**
   * [通过参数名获取url中的参数值]
   * 示例URL:http://htmlJsTest/getrequest.html?uid=admin&rid=1&fid=2&name=小明
   * @param  {[string]} queryName [参数名]
   * @return {[string]}           [参数值]
   */
  getQueryValue(queryName) {
    let query = decodeURIComponent(window.location.search.substring(1))
    let vars = query.split('&')
    for (let i = 0; i < vars.length; i++) {
      let pair = vars[i].split('=')
      if (pair[0] === queryName) {
        return pair[1]
      }
    }
    return null
  }

  changeActiveTabBar(key) {
    // 查看基金项目时验证是否登录
    if (key === 2 || key === '2') {
      this.props.fundAction.fundProjectListChangeCreator()

      if (this.props.showLoginTips) {
        this.props.searchResultAction.activeTabBarChange('1')
      } else {
        this.props.searchResultAction.activeTabBarChange(key)
        this.props.searchResultAction.currentReportChange(0)
        this.props.fundAction.fundSortTypeChangeCreator('')
        this.props.fundAction.fundCurrentPageChangeCreator(1)
      }
    } else {
      this.props.searchResultAction.activeTabBarChange(key)
      this.props.searchResultAction.currentReportChange(0)
      this.props.fundAction.fundCurrentPageChangeCreator(1)
    }
  }

  // 获取领域
  async getFielList(val) {
    if (val.trim() === '') {
      message.warning('请输入检索词后再试～')
      return
    }

    this.props.searchResultAction.getFieldListCreator()
    this.props.history.push({
      pathname: `/search/field`,
      search: `?q=${encodeURIComponent(val)}`,
      state: { q: encodeURIComponent(val) }
    })
  }
  toggleCurrentPageHandle(val) {
    this.props.fundAction.fundCurrentPageChange(val)
  }
  toggleSortTypeHandle(val) {
    this.props.fundAction.fundSortTypeChange(val)
  }
  toggleReportHandle(val) {
    this.props.searchResultAction.currentReportChange(val)
  }
  getProjectDetail(id) {
    this.props.fundAction.fundProjectDetailChangeCreator(id)
  }
  hideLoginTips() {
    this.props.searchResultAction.activeTabBarChange('1')
    this.props.userAction.showLoginTipsToggle(false)
  }
  toLogin() {
    // 去登录
    this.props.userAction.showLoginTipsToggle(false)
    commLoginUtil.loginMethod()
  }

  render() {
    const {
      searchInputVal,
      showNoFieldTips,
      fieldList,
      activeField,
      activeTabBar,
      currentReport,
      reportLoading,
      researchTrendList,
      // highAuthorList,
      highOrgList,
      projectTrendList,
      fundList,
      fundPageTotal,
      showLoginTips
    } = this.props
    const projectCount = projectTrendList.length
      ? projectTrendList.map((item) => ({
          key: item.key,
          count: item.project_money
        }))
      : []

    const fieldKey = fieldList[activeField]?.keyword
    // highAuthorList.forEach((item, index) => {
    //   if (item.key === fieldKey) {
    //     item.label =
    //       fieldKey.length > 6 ? fieldKey.slice(0, 6) + '\n' + fieldKey.slice(6) : fieldKey
    //     item.size = 120
    //     item.id = 'node0'
    //     item.labelCfg = {
    //       style: {
    //         fontSize: 14,
    //         fontWeight: 500,
    //         fill: '#fff'
    //       }
    //     }
    //   } else {
    //     item.label = item.key + '\n' + item.count
    //     item.size = item.count < 60 ? 60 : item.count > 100 ? 100 : item.count + 10
    //     item.id = `node${index + 1}`
    //     item.isLeaf = true
    //   }
    // })

    return (
      <Spin spinning={reportLoading && !showNoFieldTips}>
        <div className={css['search-list-wrapper']}>
          <div className={css['search-main-wrapper']}>
            <h2>开始测评</h2>
            <SearchInput onSearchClick={() => this.getFielList(searchInputVal)} />

            {!showNoFieldTips ? (
              <>
                <ResearchAreas list={fieldList} />
                <div className={css['tab-wrapper']}>
                  <Tabs
                    activeKey={activeTabBar.toString()}
                    tabBarExtraContent={
                      <Button
                        type="primary"
                        shape="round"
                        target="_blank"
                        href={urls.indexUrl + 'search/list?keyword=' + encodeURIComponent(fieldKey)}
                      >
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
                                  backClick={() => this.toggleReportHandle(0)}
                                  nextClick={() => this.toggleReportHandle(2)}
                                  currentReport={currentReport}
                                  fieldKey={fieldKey}
                                  title="研究走势"
                                  visualTitle="历年发文量"
                                />
                                <ChartLine
                                  name="发文量"
                                  data={researchTrendList}
                                  loading={reportLoading}
                                  shape="smooth"
                                  area={true}
                                />
                              </div>
                            )
                          case 2:
                            return (
                              <div>
                                <ReportHeader
                                  backClick={() => this.toggleReportHandle(0)}
                                  prevClick={() => this.toggleReportHandle(1)}
                                  nextClick={() => this.toggleReportHandle(3)}
                                  currentReport={currentReport}
                                  fieldKey={fieldKey}
                                  title="高发文机构"
                                  visualTitle="高发文机构及发文数量"
                                />
                                <HighOrg
                                  data={highOrgList}
                                  loading={reportLoading}
                                  name="高发文机构"
                                />
                                {/* <ReportHeader
                                backClick={() => this.toggleReportHandle(0)}
                                prevClick={() => this.toggleReportHandle(1)}
                                nextClick={() => this.toggleReportHandle(3)}
                                currentReport={currentReport}
                                fieldKey={fieldKey}
                                title="相关学者"
                                visualTitle="高发文作者"
                              />
                              {highAuthorList && highAuthorList.length > 0 ? (
                                <HighAuthor
                                  data={graphData}
                                  fieldKey={fieldKey}
                                  loading={reportLoading}
                                />
                              ) : null} */}
                              </div>
                            )
                          case 3:
                            return (
                              <div>
                                <ReportHeader
                                  backClick={() => this.toggleReportHandle(0)}
                                  prevClick={() => this.toggleReportHandle(2)}
                                  nextClick={() => this.toggleReportHandle(4)}
                                  currentReport={currentReport}
                                  fieldKey={fieldKey}
                                  title="项目获批数量"
                                  visualTitle="项目获批数量"
                                />
                                <ChartLine
                                  name="项目获批数量"
                                  data={projectTrendList}
                                  loading={reportLoading}
                                  shape=""
                                  area={true}
                                />
                              </div>
                            )
                          case 4:
                            return (
                              <div>
                                <ReportHeader
                                  backClick={() => this.toggleReportHandle(0)}
                                  prevClick={() => this.toggleReportHandle(3)}
                                  currentReport={currentReport}
                                  fieldKey={fieldKey}
                                  title="项目获批金额"
                                  visualTitle="项目获批金额(万)"
                                />
                                <ChartBar
                                  name="项目获批金额(万)"
                                  data={projectCount}
                                  loading={reportLoading}
                                />
                              </div>
                            )
                          default:
                            return (
                              <ReportThumb
                                searchInputVal={searchInputVal}
                                fieldKey={fieldKey}
                                reportClickHandle={(val) => this.toggleReportHandle(val)}
                              />
                            )
                        }
                      })()}
                    </TabPane>

                    <TabPane tab="基金项目" key="2">
                      <FoundProjects
                        data={fundList}
                        // sortType={fundSortType}
                        // currentPage={fundCurrentPage}
                        // total={fundListTotal}
                        pageTotal={fundPageTotal}
                        getProjectDetail={(id) => this.getProjectDetail(id)}
                        toggleSortTypeHandle={(type) => this.toggleSortTypeHandle(type)}
                        toggleCurrentPageHandle={(currentPage) =>
                          this.toggleCurrentPageHandle(currentPage)
                        }
                      />
                    </TabPane>
                  </Tabs>
                </div>
              </>
            ) : (
              <small style={{ color: 'red', padding: '15px 0 50px 100px' }}>
                提示：未检索到相关内容，请修改检索内容再试
              </small>
            )}
          </div>

          <Modal
            title="提示"
            closable={false}
            visible={showLoginTips}
            onOk={() => this.toLogin()}
            onCancel={() => this.hideLoginTips()}
            centered="true"
            cancelText="取消"
            okText="去登录"
          >
            <p>
              因数据统计功能消耗的计算资源较多，您需要先免费注册帐号，登录之后才能试用此项统计功能。
            </p>
          </Modal>
        </div>
      </Spin>
    )
  }
}

export default SearchReasult
