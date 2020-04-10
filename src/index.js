import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import LayoutCommon from '@/layouts/common'
import RouterArr from '@/routers'
function About() {
  return <h2>This is About</h2>
}

ReactDOM.render(
  <div>
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
        <Route path="/404">
          <About />
        </Route>
        {/* <Redirect to="/404" /> */}
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
