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
// 折线面积图
const ReportLine = Loadable({
  loader: () => import('@/views/report/line-area'),
  loading: Loading
})
// 柱状图结合折线图
const ReportBarAndLine = Loadable({
  loader: () => import('@/views/report/bar-line'),
  loading: Loading
})
// 水平柱状图
const BarFlat = Loadable({
  loader: () => import('@/views/report/bar-flat'),
  loading: Loading
})

// 图谱
const ReportGraph = Loadable({
  loader: () => import('@/views/report/graph'),
  loading: Loading
})

const routerSearch = [
  {
    path: '/search',
    name: '搜索',
    child: [
      {
        path: '/search/list/:searchKey',
        name: '搜索结果',
        component: Result,
        exact: true
      }
    ]
  },
  {
    path: '/search/report/bar-flat',
    name: '可视化水平柱状图',
    component: BarFlat,
    exact: true
  },
  {
    path: '/search/report/bar-line',
    name: '可视化柱状折线图',
    component: ReportBarAndLine,
    exact: true
  },
  {
    path: '/search/report/1',
    name: '可视化折线图',
    component: ReportLine,
    exact: true
  },
  {
    path: '/search/report/graph',
    name: '可视化图谱',
    component: ReportGraph,
    exact: true
  },
  {
    path: '/search/detail/:searchKey',
    name: '搜索详情',
    component: SearchDetail,
    exact: true
  }
]
export default routerSearch
