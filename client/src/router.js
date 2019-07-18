import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';
import Latest from '@/views/latest.vue';
import Membership from '@/views/membership.vue';
import Contact from '@/views/contact.vue';

Vue.use(Router);

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/latest',
      name: 'latest',
      component: Latest
    },
    {
      path: '/membership',
      name: 'membership',
      component: Membership
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
  ]
})
