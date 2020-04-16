import { AppGet } from '@/utils/request'

export function searchApi(param) {
  return AppGet('assit/searchApi', param)
}
