import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import LayoutCommon from '@/layouts/common'
import { RouterCommon } from '@/routers'
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
              {RouterCommon.map((router) =>
                router.child ? (
                  router.child.map((item) => (
                    <Route key={item.path} path={item.path} component={item.component} />
                  ))
                ) : (
                  <Route key={router.path} path={router.path} component={router.component} />
                )
              )}
              {/* </Switch> */}
            </LayoutCommon>
          )}
        />
        <Route path="/about">
          <About />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
