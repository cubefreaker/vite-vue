import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import LoginPage from './components/LoginPage.vue'
import DashboardPage from './components/DashboardPage.vue'
import { auth } from './firebase.js'
import { onAuthStateChanged } from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardPage,
    props: true,
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Route guard untuk melindungi halaman yang memerlukan autentikasi
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  
  if (requiresAuth) {
    // Cek status autentikasi user
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User sudah login, izinkan akses ke dashboard
        next();
      } else {
        // User belum login, redirect ke halaman login
        next('/');
      }
    }, () => {
      // Error dalam pengecekan auth, redirect ke login
      next('/');
    });
  } else {
    // Halaman tidak memerlukan auth, izinkan akses
    next();
  }
});

const app = createApp(App);
app.use(router);
app.mount('#app');
