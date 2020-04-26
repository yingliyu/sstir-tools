import Loadable from 'react-loadable'
import Loading from '@/components/loading'
const Result = Loadable({
  loader: () => import('@/views/search-result'),
  loading: Loading
})
// 搜索详情
const SearchDetail = Loadable({
  loader: () => import('@/views/detail'),
  loading: Loading
})

const routerSearch = [
  {
    path: '/search/field/:q',
    name: '搜索结果',
    component: Result,
    exact: true
  },
  {
    path: '/search/detail/:projectId',
    name: '搜索详情',
    component: SearchDetail,
    exact: true
  }
]
export default routerSearch
