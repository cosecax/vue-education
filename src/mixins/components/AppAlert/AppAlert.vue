<template>
  <div class="block alert-module">
    <div class="alert">
      <AppProgressBar :type="type" :value="timeCounter" />
      <h4>{{ title }}</h4>
    </div>
  </div>
</template>

<script>
import alertMixin from '../../alertMixin'
import AppProgressBar from '../AppProgressBar.vue'
import { AlertType } from './constants'

export default {
  props: {
    title: String,
    type: {
      type: AlertType,
      default: AlertType.PRIMARY
    }
  },
  mixins: [alertMixin],
  components: {
    AppProgressBar
  }
}
</script>

<style scoped>
.alert-module {
  position: absolute;
  top: 0;
  right: 0;
  max-width: 350px;
  border: 1px solid;
}
.alert {
  position: relative;
  min-width: 150px;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
