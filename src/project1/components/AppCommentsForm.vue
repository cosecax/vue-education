<template>
  <form class="form border">
    <div>
      <label for="author">Ваше имя:</label>
      <input name="author" type="text" v-model="author" />
    </div>

    <div>
      <label for="author">Комментарий:</label>
      <input name="text" type="text" v-model="text" />
    </div>

    <button class="btn btn-primary" :disabled="isLoading" type="submit" @click.prevent="submit">Отправить</button>
  </form>
</template>

<script>
export default {
  emits: ['createComment'],
  props: ['isLoading'],
  data () {
    return {
      author: '',
      text: '',
      date: new Date().toLocaleDateString()
    }
  },
  methods: {
    submit () {
      this.$emit('createComment', { author: this.author, text: this.text, date: this.date })
      this.author = ''
      this.text = ''
    }
  }
}
</script>

<style scoped>
.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}
</style>
