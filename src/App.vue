<template>
  <h1>Клиент-серверное приложение</h1>
  <AppAlert v-if="alerts.length" :alerts="alerts" @shiftAlert="shiftAlert" />
  <div>
    <form @submit.prevent="createUser">
      <label for="input">Username:</label>
      <input name="input" placeholder="Enter username..." v-model="username" />
      <button :disabled="!username || isLoading">Create</button>
    </form>
  </div>

  <div>
    <AppUserList :isLoading="isLoading" :users="users" @remove="deleteUser"  />
  </div>
</template>

<script>
import axios from 'axios'
import AppUserList from './AppUserList.vue'
import AppAlert from './AppAlert.vue'
import { AlertType } from './constants'

const getUrl = (id) => `https://vue-http-6f3dc-default-rtdb.firebaseio.com/users${id ? `/${id}` : ''}.json`

export default {
  name: 'App',
  data () {
    return {
      username: '',
      users: {},
      isLoading: false,
      alerts: []
    }
  },
  methods: {
    setAlert ({ type = AlertType.ERROR, message }) {
      this.alerts.push({ type, message })
    },
    async apiHandler (callback) {
      try {
        this.isLoading = true
        await callback()
        this.isLoading = false
      } catch (e) {
        this.setAlert({ message: e.message })
      }
    },
    async createUser () {
      const callback = async () => {
        await axios.post(getUrl(), { username: this.username, createAt: new Date().toLocaleDateString() })
        this.setAlert({ type: AlertType.NOTICE, message: `The user ${this.username} was created!` })
        this.username = ''
      }
      await this.apiHandler(callback)
      await this.getUsers()
    },
    async getUsers () {
      const callback = async () => {
        const response = await axios.get(getUrl())
        if (!response.data || response.data.length === 0) {
          this.setAlert({ message: 'The list of users is empty!' })
        }
        this.users = response.data || {}
      }
      await this.apiHandler(callback)
    },
    async deleteUser (id) {
      const callback = async () => {
        await axios.delete(getUrl(id))
        this.setAlert({ type: AlertType.NOTICE, message: `User ${this.users[id].username} was removed!` })
      }
      await this.apiHandler(callback)
      await this.getUsers()
    },
    shiftAlert () {
      this.alerts.shift()
    }
  },
  beforeMount () {
    this.getUsers()
  },
  components: {
    AppUserList,
    AppAlert
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
