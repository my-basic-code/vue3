import { templateConfig } from '@/settings'

const title = templateConfig.title || 'Vue Template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
