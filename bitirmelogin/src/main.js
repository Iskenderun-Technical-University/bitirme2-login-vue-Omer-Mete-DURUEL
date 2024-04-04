import './assets/main.css'
import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Vue Router'ı içe aktarın
import Giris from './components/giris.vue'; // Giriş bileşenini içe aktarın
import Kayit from './components/kayit.vue'; // Kayıt bileşenini içe aktarın
import Dashboard from './components/Dashboard.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/giris', component: Giris },
    { path: '/kayit', component: Kayit },
    { path: '/dashboard', component: Dashboard },
    { path: '/', redirect: '/giris' } // Kök dizin yönlendirmesi
  ]
});

createApp(App)
  .use(router) // Router'ı uygulamaya ekle
  .mount('#app');