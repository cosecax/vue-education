<template>
  <div class="comment border">
    <p>
      <span>
        <strong>{{ comment.author }}</strong>: <ins>{{ comment.date }}</ins>
      </span>
    </p>
    <p>
      <small>{{ comment.text }}</small>
    </p>
    <button class="btn btn-danger" @click="$emit('deleteComment', id)">Удалить</button>
  </div>
</template>
<script>
export default {
  emits: ['deleteComment'],
  props: ['comment', 'id']
}
</script>

<style scoped>
.comment {
  margin-top: 20px;
  padding: 10px;
}
</style>
