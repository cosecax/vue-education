<template>
  <h1 v-style.hover>Learn directives!</h1>
  <label v-style:color="color" for="myinput">Простой инпут</label>
  <input v-style:borderColor="color" id="myinput" v-focus />
</template>

<script>
import directives from './directives'

export default {
  data () {
    return {
      color: 'red'
    }
  },
  directives,
  name: 'AppDirectives'
}
</script>
