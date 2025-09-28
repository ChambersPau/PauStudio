import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue3-lazyload'

const app = createApp(App)
const pinia = createPinia()

app.use(VueLazyLoad,{})
app.use(pinia)
app.use(router)
app.mount('#app')
