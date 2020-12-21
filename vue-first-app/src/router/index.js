import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from "../pages/MemoriesPage.vue"
import AddMemory from "../pages/AddNewMemory.vue"

const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: "/memories",
    component: MemoriesPage
  },
  {
    path: "/memories/:id",
    component: () => import('../pages/MemoriesDetails.vue')
  },
  {
    path: "/memories/add",
    component: AddMemory
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode:'history'
})

export default router
