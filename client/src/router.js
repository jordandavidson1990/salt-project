import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/home.vue';
import About from '@/views/about.vue';
import Latest from '@/views/latest.vue';
import Membership from '@/views/membership.vue';
import Contact from '@/views/contact.vue';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
import Admin from '@/views/Admin.vue';
import NewMember from '@/views/new-member.vue';

Vue.use(Router);

export default new Router({
  mode:'history',
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
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
    {
      path: '/new-member',
      name: 'new-member',
      component: NewMember
    }
  ]
})
