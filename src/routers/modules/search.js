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
// 研究走势
const ReportLine = Loadable({
  loader: () => import('@/views/report/line-area'),
  loading: Loading
})
// 获批趋势
const ReportBarAndLine = Loadable({
  loader: () => import('@/views/report/bar-line'),
  loading: Loading
})
// 高发文机构
const BarFlat = Loadable({
  loader: () => import('@/views/report/bar-flat'),
  loading: Loading
})

// 高发作者学者
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
        path: '/search/field',
        name: '搜索结果',
        component: Result,
        exact: true
      }
    ]
  },
  // 高发文机构
  {
    // path: '/report/high-org/:searchKey',
    path: '/report/:searchKey?type="high-org"',
    name: '可视化水平柱状图',
    component: BarFlat,
    exact: true
  },
  // 项目获批趋势
  {
    path: '/report/project-trend/:searchKey',
    name: '可视化柱状折线图',
    component: ReportBarAndLine,
    exact: true
  },
  // 论文研究走势
  {
    path: '/report/search-trend/:searchKey',
    name: '可视化折线图',
    component: ReportLine,
    exact: true
  },
  // 论文相关学者
  {
    path: '/report/relate-author/:searchKey',
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
