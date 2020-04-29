import React from 'react'
import Cookies from 'js-cookie'
import urls from '@/utils/url-creator'
export default class TransferPage extends React.Component {
  componentDidMount() {
    const token = this.getQueryString('token')
    console.log(token)
    if (token) {
      if (urls.domain) {
        Cookies.set('token', token, { domain: urls.domain })
      } else {
        Cookies.set('token', token)
      }
    }
    let currenturl = Cookies.get('CURRENTURL')
    console.log(currenturl)

    if (currenturl) {
      window.location.href = currenturl
    } else {
      this.props.history.push({ pathname: '/' })
    }
  }

  getQueryString = (name) => {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    let r = window.location.search.substr(1).match(reg)
    if (r !== null) {
      return unescape(r[2])
    }
    return null
  }
  render() {
    return <div />
  }
}
