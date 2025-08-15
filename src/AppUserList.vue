<template>
  <div v-if="Object.keys(users).length === 0">
    <p>The list of users is empty</p>
  </div>
  <div v-else>
    <h2>Created Users:</h2>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <div v-for="(user, id) in users" :key="user">
        Username:<strong>{{ user.username }}</strong>
        <small>
          Created at: {{ user.createAt || '--' }}
        </small>
        <div>
          <button @click="$emit('remove', id)">Delete</button>
        </div>
        <hr/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['remove'],
  props: ['users', 'isLoading']
}
</script>
