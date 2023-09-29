import { getCurrentInstance } from 'vue'

export function changeLanguage(locale) {
  const app = getCurrentInstance();
  const i18n = app?.appContext?.app?.config?.globalProperties?.$i18n;
  if (i18n?.availableLocales.includes(locale)) {
    i18n.locale = locale;
  }
}
