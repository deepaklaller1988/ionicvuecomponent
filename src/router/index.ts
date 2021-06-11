import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue' ;
import Login from '../views/Login.vue' ;
import Register from '../views/Register.vue' ;
import AddTask from '../views/AddTask.vue';
import ShowTask from '../views/ShowTask.vue';
import Background from  '../views/Background.vue'
import Dashboard from '../views/Dashboard.vue';
import Sports from '../views/Sports.vue';
import Bussines from '../views/Bussines.vue';
import Health from '../views/Health.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/AddTask',
    name: 'AddTask',
    component: AddTask
  },
  {
    path: '/ShowTask',
    name: 'ShowTask',
    component: ShowTask
  },
  {
    path: '/Background',
    name: 'Background',
    component: Background
  },
  {
    path: '/Sports',
    name: 'Sports',
    component: Sports
  },
  {
    path: '/Bussines',
    name: 'Bussines',
    component: Bussines
  },
  {
    path: '/Health',
    name: 'Health',
    component: Health
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
