import { AppGet } from '@/utils/request'

// 关键词抽取
export function extraKeywords(param) {
  return AppGet('/basic/researchAssistant/keyword', param)
}
// 基金项目搜索列表
export function getFundLists(param) {
  return AppGet('/basic/researchAssistant/fundProject', param)
}

// 基金项目详情
export function fundDetail(param) {
  return AppGet('/basic/researchAssistant/fundProjectDetail', param)
}
