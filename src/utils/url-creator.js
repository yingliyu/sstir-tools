import config from '@/config'
const { indexUrl, baseUrl, casIndexUrl, imagesUrl, imageUrlUUMS, domain } = config.appConfig

const casUrl = casIndexUrl + 'cas/login?service='
const casUrl2 = indexUrl + 'cas/login?service='
const casLoginout = casIndexUrl + 'cas/logout?backUrl='

const loginUrl = baseUrl + '/basic/cas/login/transfer'
const automaticLogon = baseUrl + '/basic/cas/login/automaticLogon'
const fileDown = baseUrl + '/basic/file/down?path='
const editHeadImgUrl = baseUrl + '/basic/userMember/uploadHead'

const navigationUrl = indexUrl + 'navigation?id='
const expertsTopUrl = indexUrl + 'experts/expertsAbility/expertsTop?'
const inviteUrl = indexUrl + 'register?inviter='
const instrUrl = indexUrl + 'instrumentDetails?id='
const basesUrl = indexUrl + 'organ/bases/detail4?title='
const menuIndex = 0
const basedetailurl = indexUrl + 'organ/bases/detail5?'
const userLoginMap = {}

const urls = {
  casIndexUrl,
  casUrl2,
  baseUrl,
  imagesUrl,
  menuIndex,
  userLoginMap,
  loginUrl,
  casUrl,
  navigationUrl,
  expertsTopUrl,
  instrUrl,
  basesUrl,
  fileDown,
  inviteUrl,
  casLoginout,
  indexUrl,
  imageUrlUUMS,
  editHeadImgUrl,
  basedetailurl,
  automaticLogon,
  domain
}

export default urls
