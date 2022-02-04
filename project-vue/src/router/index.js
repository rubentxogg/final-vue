import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/clasificacion',
    name: 'Clasificacion',
    component: () => import('../views/Clasificacion.vue')
  },
  {
    path: '/equipos',
    name: 'Equipos',
    component: () => import('../views/Equipos.vue')
  },
  {
    path: '/jornadas',
    name: 'Jornadas',
    component: () => import('../views/Jornadas.vue')
  },
  {
    path: '/nuevojugador',
    name: 'NuevoJugador',
    component: () => import('../views/NuevoJugador.vue')
  },
  {
    path: '/eliminarjugador',
    name: 'EliminarJugador',
    component: () => import('../views/EliminarJugador.vue')
  },
  {
    path: '/nuevopartido',
    name: 'NuevoPartido',
    component: () => import('../views/NuevoPartido.vue')
  },
  {
    path: '/jugadores',
    name: 'Jugadores',
    component: () => import('../views/Jugadores.vue')
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
