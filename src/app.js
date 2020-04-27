import React from 'react'
import { message } from 'antd'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import css from './index.module.less'
import LayoutCommon from '@/layouts/common'
import RouterArr from '@/routers'
import { connect } from 'react-redux'
const mapStateToProps = (state) => {
  return {
    errorMsg: state.getIn(['app', 'errorMsg'])
  }
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
          <Switch>
            <Route
              path="/"
              render={(routeProps) => (
                <LayoutCommon {...routeProps}>
                  {/* <Switch> */}
                  {RouterArr.map((router) =>
                    router.child ? (
                      router.child.map((item) => (
                        <Route
                          key={item.path}
                          path={item.path}
                          component={item.component}
                          exact={item.exact}
                        />
                      ))
                    ) : (
                      <Route
                        key={router.path}
                        path={router.path}
                        component={router.component}
                        exact={router.exact}
                      />
                    )
                  )}
                  {/* </Switch> */}
                </LayoutCommon>
              )}
            />
            {/* <Route path="/search" render={(routeProps) => <routerSearch {...routeProps} />} /> */}

            <Redirect to="/404" />
          </Switch>
        </Router>
      </div>
    )
  }
}
export default App
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
