const env = process.env
const { REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN } = env

const getUrl = () => {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return {
        baseUrl: 'http://rap2.taobao.org:38080/app/mock/250859/'
      }
    case 'qa':
      return {
        baseUrl: 'http://rap2.taobao.org:38080/app/mock/250859/'
      }
    case 'prod':
      return {
        baseUrl: 'http://rap2.taobao.org:38080/app/mock/250859/'
      }
    default:
      return {
        baseUrl: 'http://rap2.taobao.org:38080/app/mock/250859/'
      }
  }
}
export default {
  token: REACT_APP_AUTH_TOKEN,
  baseUrl: getUrl(REACT_APP_URL_TYPE)
}
