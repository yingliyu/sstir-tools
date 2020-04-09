// import React from 'react'
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

const routerCommon = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/404',
    component: NotFound
  }
]
export default routerCommon
