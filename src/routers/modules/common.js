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
const Demo = Loadable({
  loader: () => import('@/views/demo'),
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
    path: '/demo',
    component: Demo
  }
]
export default routerCommon
