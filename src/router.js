// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Utama from './Layout/Utama.vue'
import Beranda from './Menu/Beranda.vue'
import ProfilSekolah from './Menu/ProfilSekolah.vue'

const routes = [
  {
    path: '/',
    name: 'Utama',
    component: Utama,
    children: [
      {
        path: '',
        name: 'Beranda',
        component: Beranda,
      },
      {
        path: 'beranda', // opsional: akses juga via /beranda
        name: 'BerandaAlias',
        component: Beranda,
      },
      {
        path: 'profil-sekolah',
        name: 'ProfilSekolah',
        component: ProfilSekolah,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
