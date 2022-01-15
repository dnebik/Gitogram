import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

/* eslint-disable */
import('normalize.css');
import('@/assets/styles/main.scss');
/* eslint-enable */

const app = createApp(App);

app.use(store)
  .use(router)
  .mount('#app');
