<template>
  <AppResumeConstructor />
</template>

<script>
import AppResumeConstructor from './components/AppResumeConstructor.vue'

export default {
  name: 'App',
  components: {
    AppResumeConstructor
  }
}
</script>

<style lang="scss">
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: cadetblue;
  min-height: 100vh;

  .loader {
    margin: 20px auto;
    width: 50px;
    padding: 8px;
    aspect-ratio: 1;
    border-radius: 50%;
    background: #25b09b;
    --_m:
      conic-gradient(#0000 10%,#000),
      linear-gradient(#000 0 0) content-box;
    -webkit-mask: var(--_m);
            mask: var(--_m);
    -webkit-mask-composite: source-out;
            mask-composite: subtract;
    animation: spinner 1s infinite linear;
  }
  @keyframes spinner {to{transform: rotate(1turn)}}
  }

  .error {
    color: red
  }

  .btn {
    font-size: larger;
    border-radius: 40px;
  }
  .btn-primary {
    background-color: lightblue;
    color: darkolivegreen;
  }
  .btn-secondary {
    background-color: azure;
    color: darkslategrey;
  }
  .btn-danger {
    background-color: lightpink;
    color: darkred;
  }

  .border {
    border: 2px solid darkcyan;
    border-radius: 20px;
  }
  .block {
    width: 100%;
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    max-height: 500px;
    overflow: auto;
  }
</style>
