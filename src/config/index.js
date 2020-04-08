const env = process.env
const { REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN } = env

const getUrl = () => {
  switch (REACT_APP_URL_TYPE) {
    case 'dev':
      return '1'
    case 'qa':
      return '2'
    case 'prod':
      return '3'
    default:
      return '4'
  }
}
export default {
  token: REACT_APP_AUTH_TOKEN,
  baseUrl: getUrl()
}
