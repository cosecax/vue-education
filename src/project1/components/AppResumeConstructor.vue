<template>
  <div class="container">
    <div class="main">
      <div class="constructor block">
        <h1>Конструктор Резюме</h1>
        <div class="form-selector">
          <AppConstructorSelector @selectChange="onChange" />
          <AppInputForm :type="selectedType" @inputSubmit="e => onSubmit(e, selectedType)" />
        </div>
      </div>
      <AppResume :resumeBlocks="resumeBlocks" @generateResume="generateResume" @clearResume="clearResume" />
    </div>
    <AppComments />
  </div>
</template>

<script>
import { SelectName } from '../constants'
import AppComments from './AppComments.vue'
import AppConstructorSelector from './AppConstructorSelector.vue'
import AppInputForm from './AppInputForm.vue'
import AppResume from './AppResume.vue'

export default {
  data () {
    return {
      SelectName,
      selectedType: 'header',
      resumeBlocks: []
    }
  },
  methods: {
    onChange (selectedType) {
      this.selectedType = selectedType
    },
    onSubmit (content, type) {
      this.resumeBlocks.push({ type, content })
    },
    generateResume (resumeBlock) {
      this.resumeBlocks = resumeBlock
    },
    clearResume () {
      this.resumeBlocks = []
    }
  },
  components: {
    AppConstructorSelector,
    AppInputForm,
    AppResume,
    AppComments
  }
}
</script>

<style scoped>
.container {
  display: grid;
  padding: 100px 20px;
  gap: 20px;
}
.main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 1152px) {
    display: flex;
    flex-direction: column;

    .block {
      max-width: none;
    }
  }
}
.constructor {
  .form-selector {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
}
</style>
