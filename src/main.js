import { createApp, ref } from 'vue'
import App from './plugins/App.vue'
import i18n from './plugins/i18n'
import messages from './messages'
// import App from './directives/App.vue'
// import App from './mixins/App.vue'
// import App from './project1/App.vue'

createApp(App)
  .use(i18n, { messages, ref })
  .mount('#app')
