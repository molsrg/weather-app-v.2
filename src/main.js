import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/main.css'

import VueCarousel from 'vue-carousel';
import PrimeVue from 'primevue/config';
import router from './router/router';
import store from './store/store';


createApp(App).use(store).use(VueCarousel).use(PrimeVue).use(router).mount('#app')
