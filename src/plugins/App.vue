<template>
  <TheHeader />
  <main>
    {{ $i18n.t('app.main.description') }}
  </main>
</template>

<script>
import TheHeader from './components/TheHeader.vue'

export default {
  components: {
    TheHeader
  }
}
</script>
