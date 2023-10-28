import { createApp } from 'vue'; 

import App from './App.vue';
import HomeView from './views/Homeview.vue'
import PriceView from './views/Priceview.vue'
import { createRouter, createWebHistory } from 'vue-router'; 
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView, 
      name: 'HomeView', 
    },
    {
      path: '/price',
      component: PriceView, 
      name: 'PriceView',
    },
  ],
});

createApp(App).use(router).mount('#app');
