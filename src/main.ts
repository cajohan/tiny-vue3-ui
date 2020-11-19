import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory, createRouter} from 'vue-router'
import hd from './components/hd.vue'
import Hd2 from './components/Hd2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: hd},
    {path: '/xxx', component: Hd2}
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
