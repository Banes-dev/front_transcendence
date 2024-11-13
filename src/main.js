import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "./assets/styles/tailwind.css"
import i18n from './i18n'
import store from './store'

createApp(App).use(i18n).use(store).mount('#app')
