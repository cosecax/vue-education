<template>
  <div class="block notice">
      {{ title }}
  </div>
</template>

<script>
import alertMixin from '@/mixins/alertMixin'

export default {
  props: ['title'],
  mixins: [alertMixin]
}
</script>

<style scoped>
.notice {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 50%;
  min-height: 150px;
  background-color: paleturquoise;
  color: darkslateblue;
}
</style>
