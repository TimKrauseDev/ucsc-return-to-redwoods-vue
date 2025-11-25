import './assets/styles/site.scss';
import 'primeicons/primeicons.css';
import Lara from '@primeuix/themes/lara';

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Lara,
  }
});

app.mount('#app')
