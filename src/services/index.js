import { AppGet } from '@/utils/request'

// 关键词抽取
export function extraKeywords(param) {
  return AppGet('assit/searchApi', param)
}
// 基金项目搜索列表
export function fundLists(param) {
  return AppGet('assit/searchApi', param)
}

// 基金项目详情
export function fundDetail(param) {
  return AppGet('assit/searchApi', param)
}

// 可视化-项目获批趋势
export function projectTrends(param) {
  return AppGet('assit/searchApi', param)
}

// 可视化-论文高发文机构
export function highOrgs(param) {
  return AppGet('assit/searchApi', param)
}

// 可视化-论文研究走势
export function searchTrends(param) {
  return AppGet('assit/searchApi', param)
}

// 可视化-论文高发文作者
export function highAuthors(param) {
  return AppGet('assit/searchApi', param)
}
