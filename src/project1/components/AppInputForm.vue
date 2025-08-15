<template>
  <form class="form">
    <div class="input">
      <label for="input">Название {{ type }}: </label>
      <input v-if="type !== SelectName.TEXT" :value="value" @input="change" type="text" name="input" />
      <textarea v-else :value="value" @input="change" type="text" name="input" />
    </div>
    <button class="btn btn-primary" type="submit" :disabled="type === SelectName.IMAGE ? !value.includes('https://') : value.length < 4" @click.prevent="submit">Создать</button>
  </form>
</template>

<script>
import { SelectName } from '../constants'

export default {
  emits: ['inputSubmit'],
  props: ['type'],
  data () {
    return {
      value: '',
      SelectName
    }
  },
  methods: {
    submit () {
      this.$emit('inputSubmit', this.value)
      this.value = ''
    },
    change (e) {
      this.value = e.target.value
    }
  }
}
</script>

<style scoped>
.form {
  .input {
    display: flex;
  }
}
</style>
