<template>
  <div>
    <label for="constructor-select">Выберите категорию: </label>
    <select name="constructor-select" :value="SelectName.HEADER" @change="e => $emit('selectChange', e.target.value)">
      <option :value="SelectName.HEADER">Заголовок</option>
      <option :value="SelectName.SUBHEADER" selected>Подзаголовок</option>
      <option :value="SelectName.IMAGE">Аватар</option>
      <option :value="SelectName.TEXT">Текст</option>
    </select>
  </div>
</template>
<script>
import { SelectName } from '../constants'

export default {
  emits: ['testEmit'],
  data () {
    return {
      SelectName
    }
  }
}
</script>
