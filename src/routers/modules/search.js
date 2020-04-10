import Loadable from 'react-loadable'
import Loading from '@/components/loading'
const Reault = Loadable({
  loader: () => import('@/views/search-result'),
  loading: Loading
})

const routerSearch = [
  {
    path: '/search',
    name: '搜索',
    child: [
      {
        path: '/search/list/:key',
        name: '搜索结果',
        component: Reault,
        exact: true
      }
    ]
  }
]
export default routerSearch
