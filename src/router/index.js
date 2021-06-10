import Vue from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'


const Home = () => import('@/views/home/Home.vue')
const Category = () => import('@/views/category/Category.vue')
const Shopcart = () => import('@/views/shopcart/Shopcart.vue')
const Profile = () => import('@/views/profile/Profile.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopcart',
    component: Shopcart
  },
  {
    path: '/profile',
    component: Profile
  },
  // {
  //   path: '/detail/:iid',
  //   component: Detail
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
