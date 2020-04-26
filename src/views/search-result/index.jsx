import React from 'react'
import { Button, Tabs, Modal } from 'antd'
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
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { searchActionCreator, fundActionCreator, userActionCreator } from '@/store/action-creators'
import { withRouter, Redirect } from 'react-router-dom'
import urls from '@/utils/url-creator'
import commLoginUtil from '@/utils/login-transfer'
const mapStateToProps = (state) => {
  return {
    searchInputVal: state.getIn(['search', 'searchInputVal']),
    showNoFieldTips: state.getIn(['search', 'showNoFieldTips']),
    fieldList: state.getIn(['search', 'fieldList']),
    activeField: state.getIn(['search', 'activeField']),
    activeTabBar: state.getIn(['search', 'activeTabBar']),
    currentReport: state.getIn(['search', 'currentReport']),
    reportLoading: state.getIn(['search', 'reportLoading']),
    researchTrendList: state.getIn(['search', 'researchTrendList']),
    highAuthorList: state.getIn(['search', 'highAuthorList']),
    highOrgList: state.getIn(['search', 'highOrgList']),
    projectTrendList: state.getIn(['search', 'projectTrendList']),
    fundList: state.getIn(['fund', 'fundList']),
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
      const searchInputVal =
        this.props.match.params && this.props.match.params.q ? this.props.match.params.q : ''
      console.log(searchInputVal)
      this.props.searchResultAction.searchInputChangeCreator(searchInputVal)
      this.getFielList(searchInputVal)
    } else {
      this.getFielList(this.props.searchInputVal)
    }
  }
  changeActiveTabBar(key) {
    // 查看基金项目时验证是否登录
    if (key === 2 || key === '2') {
      if (this.props.userInfo) {
        this.props.fundAction.fundProjectListChangeCreator()
        this.props.searchResultAction.activeTabBarChange(key)
        this.props.searchResultAction.getTabContentByField()
        this.props.searchResultAction.currentReportChange(0)
        this.props.fundAction.fundSortTypeChangeCreator('')
      } else {
        this.props.userAction.showLoginTipsToggle(true)
      }
    } else {
      this.props.searchResultAction.activeTabBarChange(key)
      this.props.searchResultAction.getTabContentByField()
      this.props.searchResultAction.currentReportChange(0)
      this.props.fundAction.fundCurrentPageChangeCreator(1)
    }
  }

  // 获取领域
  async getFielList(val) {
    this.props.searchResultAction.getFieldListCreator()
    this.props.history.push({
      pathname: '/search/field/' + val,
      state: { q: val }
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
    this.props.fundAction.showLoginTipsToggle(false)
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
      highAuthorList,
      highOrgList,
      projectTrendList,
      fundList,
      fundPageTotal,
      showLoginTips,
      userInfo,
      userAction: { showLoginTipsToggle }
    } = this.props
    const fieldKey = fieldList[activeField]?.keyword
    const researchTrendLists =
      researchTrendList && researchTrendList.length ? researchTrendList : []
    return (
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
                      href={'http://www.sstir.cn/search/list?keyword=' + fieldKey}
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
                              <SearchTrend data={researchTrendLists} loading={reportLoading} />
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
                                title="相关学者"
                                visualTitle="高发文作者"
                              />
                              <HighAuthor
                                data={highAuthorList}
                                fieldKey={fieldKey}
                                loading={reportLoading}
                              />
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
                                title="高发文机构"
                                visualTitle="高发文机构及发文数量"
                              />
                              <HighOrg data={highOrgList} loading={reportLoading} />
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
                                title="项目获批趋势"
                                visualTitle="项目获批数量及金额趋势"
                              />
                              <ProjectTrend data={projectTrendList} loading={reportLoading} />
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
                    {userInfo ? (
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
                    ) : (
                      // Cookies.set('CURRENTURL', urls.indexUrl + 'user/home')
                      // http://cas.sstir.cn/cas/login?service=http://web-ui-sstir-pre.apps.datadrivecloud.com
                      // window.location.href = urls.casUrl + urls.indexUrl
                      <Redirect to={urls.casUrl + urls.indexUrl} />
                    )}
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

        <div>
          <Modal
            title="提示"
            closable={false}
            visible={showLoginTips}
            onOk={() => this.toLogin()}
            onCancel={() => showLoginTipsToggle(false)}
            centered="true"
            cancelText="取消"
            okText="去登录"
          >
            <p>
              因数据统计功能消耗的计算资源较多，您需要先免费注册帐号，登录之后才能试用此项统计功能。
            </p>
          </Modal>
        </div>
      </div>
    )
  }
}

export default SearchReasult
