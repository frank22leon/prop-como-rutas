import Vue from 'vue'
import VueRouter from 'vue-router'

import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/notfound",
    component: NotFound,
  },
  {
    path: "*",
    redirect: "/notfound",
  },
  {
    path: "",
    redirect: "/inicio",
  },
  {
    path: "/home",
    redirect: "/inicio",
  },
  {
    path: "/portada",
    redirect: "/inicio",
  },
  {
    path: "",
    redirect: "/inicio",
  },
  {
    path: "/inicio",
    component: () =>
      import(
        "../views/Inicio.vue"
      ),
  },
  {
    path: "/sobremi",
    component: () =>
      import(
        "../views/SobreMi.vue"
      ),

    alias: ['/acerca']

  },
  {
    path: "/contacto",
    component: () =>
      import(
          /* webpackChunkName: "Contacto" */
        "../views/Contacto.vue"
      ),
    alias: ['/contactarme']

  },
  {
    path: "/post",
    name: "Post",
    component: () => import("../views/Post.vue"),
    children: [
      {
        path: "/:id",
        component: () => import("../views/Articulo.vue"),
      },
    ],
  },
  {
    path: "/adminsitrador",
    name: "Administrador",
    component: () => import("../views/Administrador.vue"),
    children: [
      {
        path: "/administrador/simple",
        component: () => import("../views/AdministradorSimple.vue"),
      },
      {
        path: "/administrador/avanzado",
        component: () => import("../views/AdministradorAvanzado.vue"),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
