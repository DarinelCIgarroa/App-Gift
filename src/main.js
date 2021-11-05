import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
// Importaciones de Vue-Axios
import VueAxios from 'vue-axios'
import axios from 'axios'

createApp(App).use(router).use(VueAxios,axios).mount('#app')
