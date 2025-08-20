import { LanguageType } from '@/constants'

export default {
  install (app, { messages, ref }) {
    const language = ref(LanguageType.RU)
    const switchLanguage = () => {
      language.value === LanguageType.RU ? language.value = LanguageType.EN : language.value = LanguageType.RU
    }

    app.config.globalProperties.$i18n = {
      language: language.value,
      switchLanguage,
      t (key) {
        return messages[language.value][key]
      }
    }
  }
}
