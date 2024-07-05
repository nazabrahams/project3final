import { createRouter, createWebHashHistory } from 'vue-router'
import HomeComp from '../components/HomeComp.vue'
import ProjectsComp from '../components/ProjectsComp.vue'
import TestimonialsComp from '../components/TestimonialsComp.vue'
import EducationComp from '../components/EducationComp.vue'
import ContactComp from '../components/ContactComp.vue'
// import AboutComp from '../components/AboutComp.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeComp
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: ProjectsComp
  },
  {
    path: '/Testimonials',
    name: 'Testimonials',
    component: TestimonialsComp
  },
  {
    path: '/Education',
    name: 'Education',
    component: EducationComp
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactComp
  },
  {
    path: '/About',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/AboutComp.vue')
  // path: '/',
  // components: {
  //   default: HomeComp,
  //   about: AboutComp,
  //   resume: EducationComp,
  //   testimonials: TestimonialsComp,
  //   projects: ProjectsComp,
    
  // }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
