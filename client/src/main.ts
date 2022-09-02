import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// init the store excuses
store.methods.fetchExcuses();

const app = createApp(App)

app.use(router)

app.mount('#app')
