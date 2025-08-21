<template>
  <div @click="$emit('closeDialog')" class="background"></div>
  <div class="modal">
    <h2 class="header">{{ title }}</h2>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['closeDialog'],
  props: ['title']
}
</script>

<style scoped>
.background {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  backdrop-filter: blur(1px);
  background-color: #00000099;
}

.modal {
  padding: 10px;
  background: white;
  border: 2px solid;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
}
.header {
  margin-bottom: 12px;
  font-size: 3em;
}
</style>
