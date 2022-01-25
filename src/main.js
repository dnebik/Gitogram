import { createApp } from 'vue';
import requests from '@/plugins/requests';
import App from './App.vue';
import router from './router';
import createStore from './store';

/* eslint-disable */
import('normalize.css');
import('@/assets/styles/main.scss');
/* eslint-enable */

const app = createApp(App);

app.use(createStore(app))
  .use(router)
  .use(requests)
  .mount('#app');
