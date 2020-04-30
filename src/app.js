import React from 'react'
import { message } from 'antd'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import css from './index.module.less'
import Cookies from 'js-cookie'
import commLoginUtil from '@/utils/login-transfer'
import LayoutCommon from '@/layouts/common'
// import RouterArr from '@/routers'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'
import Loading from '@/components/loading'
const Result = Loadable({
  loader: () => import('@/views/search-result'),
  loading: Loading
})
// 搜索详情
const SearchDetail = Loadable({
  loader: () => import('@/views/detail'),
  loading: Loading
})
const Home = Loadable({
  loader: () => import('@/views/home'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('@/views/error-pages/not-found'),
  loading: Loading
})
// 中转页面
const TransferPage = Loadable({
  loader: () => import('@/views/transfer'),
  loading: Loading
})
const mapStateToProps = (state) => {
  return {
    token: state.getIn(['user', 'token']),
    errorMsg: state.getIn(['app', 'errorMsg'])
  }
}
function PrivateRoute({ children, ...rest }) {
  const { token } = Cookies.get('token')

  return (
    <Route
      {...rest}
      render={({ location }) =>
        token ? children : setTimeout(() => commLoginUtil.loginMethod(), 3000)
      }
    />
  )
}
@connect(mapStateToProps)
class App extends React.Component {
  componentDidUpdate() {
    if (this.props.errorMsg) {
      message.error(this.props.errorMsg + '~')
    }
  }

  render() {
    return (
      <div className={css['app-wrapper']}>
        <Router>
          <LayoutCommon>
            <Switch>
              {/* 首页 */}
              <Route path="/" component={Home} key="/home" exact={true} />
              {/* 搜索结果页 */}
              <Route path="/search/field/:q" component={Result} key="/search/field" />
              {/* 中转页 */}
              <Route path="/transfer/page" component={TransferPage} key="/transfer/page" />
              {/* 项目详情页 */}
              <PrivateRoute
                path="/search/detail/:projectId"
                component={SearchDetail}
                key="/search/detail"
              />
              {/* 404 */}
              <Route path="/404" component={NotFound} key="/404" exact={true} />
              <Redirect to="/404"> </Redirect>
            </Switch>
          </LayoutCommon>
        </Router>
      </div>
    )
  }
}
export default App
