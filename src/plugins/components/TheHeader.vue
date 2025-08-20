<template>
  <div class="header">
    <h1>{{ $i18n.t('app.title') }}</h1>
    <button @click="$i18n.switchLanguage">{{ $i18n.t('app.switchLanguage') }}: {{ LanguageFlag[$i18n.language] }}</button>
  </div>
</template>

<script>
import { LanguageFlag } from '@/constants'

export default {
  emits: ['toggleLanguage'],
  data () {
    return {
      LanguageFlag
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
</style>
