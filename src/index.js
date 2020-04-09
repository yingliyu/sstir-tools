import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import LayoutCommon from '@/layouts/common'

function About() {
  return <h2>About</h2>
}

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route path="/">
          <LayoutCommon />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
