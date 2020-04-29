import Loadable from 'react-loadable'
import Loading from '@/components/loading'

const Home = Loadable({
  loader: () => import('@/views/home'),
  loading: Loading
})
const NotFound = Loadable({
  loader: () => import('@/views/error-pages/not-found'),
  loading: Loading
})
// 中转页面
const TransferPage = Loadable({
  loader: () => import('@/views/transfer'),
  loading: Loading
})
const routerCommon = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/404',
    component: NotFound
  },
  {
    path: '/transfer/page',
    name: '中转页面',
    component: TransferPage,
    exact: true
  }
]
export default routerCommon
