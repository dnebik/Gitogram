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
const store = createStore(app);

router.beforeEach(async (to, from, next) => {
  const isAuthPage = to.name === 'auth';
  const user = await store.dispatch('profile/getUser');

  if (user) {
    next(isAuthPage ? { name: 'home' } : null);
  } else {
    next(isAuthPage ? null : { name: 'auth' });
  }
});

app.use(store)
  .use(router)
  .use(requests)
  .mount('#app');
