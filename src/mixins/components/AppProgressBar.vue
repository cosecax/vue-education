<template>
  <div class="progress-bar">
    <div class="status" :class="type" :style="{ height: `${calcValue}%` }"></div>
  </div>
</template>

<script>
import { AlertType } from './AppAlert/constants'

export default {
  props: {
    type: {
      type: AlertType,
      default: AlertType.PRIMARY
    },
    value: {
      type: Number,
      default: 10
    }
  },
  computed: {
    calcValue () {
      return this.value * 10
    }
  }
}
</script>

<style scoped>
.progress-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: 100px;
}
.status {
  transition: height .5s ease-in-out;
  width: 10px;
  border-radius: 4px;
}
.primary {
  background-color: aquamarine;
}
.danger {
  background-color: salmon;
}
</style>
