import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Home from "./views/Home.vue";
import Skills from "./views/Skills.vue";
import Project from "./views/Project.vue";
import {createWebHistory, createRouter} from "vue-router";




const routes =[
    {path: '/', component: Home},
    {path: '/Skills', component: Skills},
    {path: '/Project', component: Project},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .mount('#app')