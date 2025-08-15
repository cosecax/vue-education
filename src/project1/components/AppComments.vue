<template>
  <div class="comments block">
    <h2>Панель комментариев:</h2>
    <button class="btn" :class="isActivePanel ? 'btn-secondary' : 'btn-primary'" @click="isActivePanel=!isActivePanel">
      {{isActivePanel ? "Закрыть форму" : "Открыть форму отправки?"}}
    </button>
    <div v-if="isActivePanel">
      <AppCommentsForm :isLoading="isLoading" @create-comment="createComment" />
    </div>
    <p class="error">{{ error.message }}</p>
    <div class="loader" v-if="isLoading"></div>
    <div v-else>
      <div v-if="Object.keys(comments).length === 0">
        <h3>Комментариев пока нет</h3>
        <button class="btn btn-primary" @click="getComments">Загрузить</button>
      </div>
      <div v-else>
        <div v-for="(comment, id) in comments" :key="comment">
          <AppComment :comment="comment" :id="id" @deleteComment="deleteComment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ApiUrl } from '@/project1/constants'
import AppCommentsForm from './AppCommentsForm.vue'
import AppComment from './AppComment.vue'

export default {
  data () {
    return {
      comments: {},
      error: {},
      isEmpty: false,
      isLoading: false,
      isActivePanel: false
    }
  },
  methods: {
    async apiHandler (callback) {
      try {
        this.error = {}
        this.isLoading = true
        await callback()
      } catch ({ message }) {
        this.error = { message }
      } finally {
        this.isLoading = false
      }
    },
    async createComment ({ text, author, date }) {
      const callback = async () => {
        await axios.post(ApiUrl.COMMENTS, { author, text, date })
      }
      await this.apiHandler(callback)
      await this.getComments()
    },
    async getComments () {
      const callback = async () => {
        const { data } = await axios.get(ApiUrl.COMMENTS)
        if (data === null) {
          this.comments = {}
          throw new Error('На сервере нет данных')
        }

        this.comments = data
      }
      await this.apiHandler(callback)
    },
    async deleteComment (id) {
      const callback = async () => {
        await axios.delete(ApiUrl.COMMENTS_BY_ID(id))
      }
      await this.apiHandler(callback)
      await this.getComments()
    }
  },
  components: {
    AppCommentsForm,
    AppComment
  }
}
</script>

<style scoped>
.comments {
  max-width: none;
  overflow: auto;
}
</style>
