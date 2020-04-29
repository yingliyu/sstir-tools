import React from 'react'
import { List, Pagination } from 'antd'
import css from './index.module.less'
import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fundActionCreator } from '@/store/action-creators'
import { withRouter } from 'react-router-dom'
const mapStateToProps = (state) => {
  return {
    isLoading: state.getIn(['fund', 'isLoading']),
    errMsg: state.getIn(['fund', 'errMsg']),
    fundList: state.getIn(['fund', 'fundList']),
    fundSortType: state.getIn(['fund', 'fundSortType']),
    fundCurrentPage: state.getIn(['fund', 'fundCurrentPage']),
    fundPageTotal: state.getIn(['fund', 'fundPageTotal']),
    fundListTotal: state.getIn(['fund', 'fundListTotal']),
    fundProjectDetail: state.getIn(['fund', 'fundProjectDetail']),
    showLoginTips: state.getIn(['fund', 'showLoginTips'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fundAction: bindActionCreators(fundActionCreator, dispatch)
  }
}
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class FoundProjects extends React.Component {
  toggleSortTypeHandle(val) {
    if (val === 'appro_year') {
      if (this.props.fundSortType === 'appro_year asc') {
        this.props.fundAction.fundSortTypeChangeCreator(val + ' desc')
      } else {
        this.props.fundAction.fundSortTypeChangeCreator(val + ' asc')
      }
    } else if (val === 'project_money') {
      if (this.props.fundSortType === 'project_money asc') {
        this.props.fundAction.fundSortTypeChangeCreator(val + ' desc')
      } else {
        this.props.fundAction.fundSortTypeChangeCreator(val + ' asc')
      }
    } else {
      this.props.fundAction.fundSortTypeChangeCreator('')
    }
    this.props.fundAction.fundCurrentPageChangeCreator(1)
    this.props.fundAction.fundProjectListChangeCreator()
  }
  getProjectDetail(id) {
    this.props.fundAction.fundProjectDetailChangeCreator(id)
    // this.props.history.push({
    //   pathname: `/search/detail/${id}`
    // })
    window.open(`/search/detail/${id}`, '_blank')
  }

  toggleCurrentPageHandle(page) {
    this.props.fundAction.fundCurrentPageChangeCreator(page)
    this.props.fundAction.fundProjectListChangeCreator()
  }
  render() {
    const { isLoading, fundList, fundSortType, fundCurrentPage, fundListTotal } = this.props
    return (
      <div className={css['found-projects-wrapper']}>
        <List
          itemLayout="horizontal"
          dataSource={fundList}
          loading={isLoading}
          header={
            !fundList.length ? (
              ''
            ) : (
              <div className={css['list-header-wrapper']}>
                <p>
                  <span>排序：</span>
                  <span
                    className={css['sort-type']}
                    style={{
                      color: fundSortType === '' ? '#08c' : ''
                    }}
                    onClick={() => this.toggleSortTypeHandle('')}
                  >
                    默认 &nbsp;&nbsp;&nbsp;&nbsp;
                  </span>
                  <span
                    className={css['sort-wrapper']}
                    onClick={() => this.toggleSortTypeHandle('appro_year')}
                  >
                    <span className={css['sort-type']}>批准年份 </span>
                    <i>
                      <CaretUpFilled
                        style={{
                          fontSize: '16px',
                          color: fundSortType === 'appro_year asc' ? '#08c' : ''
                        }}
                      />
                      <CaretDownFilled
                        style={{
                          position: 'relative',
                          top: '-5px',
                          color: fundSortType === 'appro_year desc' ? '#08c' : ''
                        }}
                      />
                    </i>
                  </span>
                  <span
                    className={css['sort-wrapper']}
                    onClick={() => this.toggleSortTypeHandle('project_money')}
                  >
                    <span className={css['sort-type']}>金额 </span>
                    <i>
                      <CaretUpFilled
                        style={{
                          fontSize: '16px',
                          color: fundSortType === 'project_money asc' ? '#08c' : ''
                        }}
                      />
                      <CaretDownFilled
                        style={{
                          position: 'relative',
                          top: '-5px',
                          color: fundSortType === 'project_money desc' ? '#08c' : ''
                        }}
                      />
                    </i>
                  </span>
                </p>
                <div className={css['page-wrapper']}>
                  <span>
                    找到{fundListTotal}条结果{fundListTotal > 100 ? '，为您展示前100条' : ''}
                  </span>
                  <Pagination
                    simple
                    current={fundCurrentPage}
                    total={fundListTotal > 100 ? 100 : fundListTotal}
                    onChange={(page) => this.toggleCurrentPageHandle(page)}
                  />
                </div>
              </div>
            )
          }
          footer={
            !fundList.length ? (
              ''
            ) : (
              <Pagination
                simple
                current={fundCurrentPage}
                total={fundListTotal > 100 ? 100 : fundListTotal}
                onChange={(page) => this.toggleCurrentPageHandle(page)}
              />
            )
          }
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                onClick={() => this.getProjectDetail(item.source.id)}
                title={item.source.title}
                description={
                  <div className={css['list-item-desc']}>
                    <div className={css['item-top-wrapper']}>
                      <span className={css['span-item-user']}>
                        负责人：{item.source.leader || '无'}
                      </span>
                      {/* <span className={css['unit-wrapper']}>
                        申请单位：{item.source.unit || '无'}
                      </span> */}
                      <span className={css['span-item-type']}>
                        研究类型：{item.source.project_type || '无'}
                      </span>
                      <span className={css['span-item-year']}>
                        批准年度：{item.source.appro_year || '无'}
                      </span>
                      <span className={css['span-item-money']}>
                        金额：
                        {item.source.project_money !== '' ? item.source.project_money + '万' : '无'}
                      </span>
                      {/* <span>项目批准号：{item.source.pid || '无'}</span> */}
                    </div>
                    <div>
                      <span>
                        关键词：
                        {item.source.keywords.length ? (
                          <span
                            dangerouslySetInnerHTML={{
                              __html: item.source.keywords.map((item) => `${item}&nbsp;`)
                            }}
                          />
                        ) : (
                          '无'
                        )}
                      </span>
                    </div>
                  </div>
                }
              />
            </List.Item>
          )}
        />
      </div>
    )
  }
}
export default FoundProjects
