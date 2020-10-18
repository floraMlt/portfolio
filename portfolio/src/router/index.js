import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProjectCategories from '../views/ProjectCategories.vue'
import Projects from '../views/Projects.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/projects',
    name: 'ProjectCategories',
    component: ProjectCategories
  },
  {
    path: '/projects/:catName',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:catName/:titleP',
    name: 'ProjectDetails',
    component: ProjectDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router