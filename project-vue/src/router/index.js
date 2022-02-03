import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
