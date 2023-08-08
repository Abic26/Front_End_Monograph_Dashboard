import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import Modal_Login from './components/Modal_Login.vue'
import Index_Login from './components/Index_Login.vue'
import Prueba from './components/prueba.vue'


// router
const routes = [
    {
        path: '/', component: Prueba,
    },
    {
        path: '/index_login', component: Index_Login, name: 'index_login'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// instance vue
const app = createApp(App)
app.use(router)
app.mount('#app')
