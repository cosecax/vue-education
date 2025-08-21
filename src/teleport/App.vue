<template>
  <h1>Изучаем телепорт</h1>
  <div>
    <button @click="toggleModal">Открыть окно</button>
  </div>
  <teleport v-if="isActiveModal" to="body">
    <TheModal @closeDialog="isActiveModal = false" title="Невероятное модальное окно">
      <img width="500px" src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg" />
    </TheModal>
  </teleport>
</template>

<script>
import TheModal from './TheModal.vue'

export default {
  data () {
    return {
      isActiveModal: false
    }
  },
  methods: {
    toggleModal () {
      this.isActiveModal = !this.isActiveModal
    }
  },
  components: {
    TheModal
  }
}
</script>

<style>
html {
  height: 100%;
  position: relative;
}
</style>
