import Cookies from 'js-cookie'
import urls from '@/utils/url-creator'

function loginMethod() {
  Cookies.set('CURRENTURL', window.location.href)
  window.location.href = urls.casUrl + encodeURIComponent(urls.loginUrl)
  // window.open(urls.casUrl + encodeURIComponent(urls.loginUrl), '_blank')
}
function loginUrl() {
  Cookies.set('CURRENTURL', window.location.href)
  return urls.casUrl + encodeURIComponent(urls.loginUrl)
}
export default {
  loginMethod,
  loginUrl
}
