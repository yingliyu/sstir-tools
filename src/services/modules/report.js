import { AppGet } from '@/utils/request'

// 可视化-项目获批趋势
export function projectTrends(param) {
  return AppGet('/basic/researchAssistant/projectTrend', param)
}

// 可视化-论文高发文机构
export function highOrgs(param) {
  return AppGet('/basic/researchAssistant/thesisOrg', param)
}

// 可视化-论文研究走势
export function searchTrends(param) {
  return AppGet('/basic/researchAssistant/researchTrend', param)
}

// 可视化-论文高发文作者
export function highAuthors(param) {
  return AppGet('/basic/researchAssistant/thesisAuthor', param)
}
