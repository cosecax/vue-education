<template>
  <div v-for="alert in alerts" :key="alert">
    <div :class="alert.type">
      <p class="message">{{ alert.message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['shiftAlert'],
  props: {
    alerts: []
  },
  updated () {
    setTimeout(() => this.$emit('shiftAlert'), 2000)
  }
}
</script>
<style scoped>
.notice {
  background-color: aquamarine;
  color: darkcyan
}
.error {
  background-color: salmon;
  color: darkred;
}
.message {
  font-size: larger;
}
</style>
