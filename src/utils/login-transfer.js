import Cookies from 'js-cookie'
import urls from '@/utils/url-creator'

function loginMethod() {
  Cookies.set('CURRENTURL', window.location.href)
  window.location.href = urls.casUrl + encodeURIComponent(urls.loginUrl)
}
export default {
  loginMethod
}
