import React from 'react'
import ReactDOM from 'react-dom'
import 'babel-polyfill'

import App from '@/app'
import { Provider } from 'react-redux'
import store from '@/store'
import 'core-js/es'
import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import '@babel/preset-env'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
