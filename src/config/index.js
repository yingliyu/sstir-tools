const env = process.env
const { REACT_APP_URL_TYPE, REACT_APP_AUTH_TOKEN } = env

const getUrl = () => {
  switch (REACT_APP_URL_TYPE) {
    // development
    case 'dev':
      return {
        webUrl: 'http://192.168.2.114:3000',
        indexUrl: 'http://localhost:8087',
        baseUrl: 'http://rap2.taobao.org:38080/app/mock/250859',
        casIndexUrl: 'http://10.10.11.165:8222/',
        imagesUrl: 'http://cmsimg.test.sstir.cn/sstir/',
        imageUrlUUMS: 'http://cmsimg.test.sstir.cn/UUMS/'
      }
    // qa
    case 'qa':
      return {
        indexUrl: 'http://new.test.sstir.cn/',
        defHouUrl: 'http://apigate.test.sstir.cn',
        casIndexUrl: 'http://cas.test.sstir.cn/',
        imagesUrl: 'http://cmsimg.test.sstir.cn/sstir/',
        imageUrlUUMS: 'http://cmsimg.test.sstir.cn/UUMS/',
        domain: '.sstir.cn'
      }
    // production
    case 'prod':
      return {
        webUrl: 'http://research-ui-sstir-pre.apps.datadrivecloud.com',
        indexUrl: 'http://www.sstir.cn/',
        baseUrl: 'http://apigate.sstir.cn',
        casIndexUrl: 'http://cas.sstir.cn/',
        imagesUrl: 'http://cmsimg.sstir.cn/sstir/',
        imageUrlUUMS: 'http://cmsimg.sstir.cn/UUMS/',
        domain: '.sstir.cn'
      }
    case 'pre':
      return {
        webUrl: 'http://research-ui-sstir-pre.apps.datadrivecloud.com',
        indexUrl: 'http://web-ui-sstir-pre.apps.datadrivecloud.com/',
        baseUrl: 'http://gateway-sstir-pre.apps.datadrivecloud.com',
        casIndexUrl: 'http://cas.sstir.cn/',
        imagesUrl: 'http://cmsimg.sstir.cn/sstir/',
        imageUrlUUMS: 'http://cmsimg.sstir.cn/UUMS/',
        domain: '.apps.datadrivecloud.com'
      }
    // default: pre
    default:
      return {
        webUrl: 'http://research-ui-sstir-pre.apps.datadrivecloud.com',
        indexUrl: 'http://web-ui-sstir-pre.apps.datadrivecloud.com/',
        baseUrl: 'http://gateway-sstir-pre.apps.datadrivecloud.com',
        casIndexUrl: 'http://cas.sstir.cn/',
        imagesUrl: 'http://cmsimg.sstir.cn/sstir/',
        imageUrlUUMS: 'http://cmsimg.sstir.cn/UUMS/',
        domain: '.apps.datadrivecloud.com'
      }
  }
}
export default {
  token: REACT_APP_AUTH_TOKEN,
  appConfig: getUrl(REACT_APP_URL_TYPE)
}
