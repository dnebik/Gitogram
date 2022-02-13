import { createStore as createVuexStore } from 'vuex';
import repos from '@/store/repos';
import profile from '@/store/profile';

function createStore(app) {
  const store = createVuexStore({
    modules: {
      repos,
      profile,
    },
  });
  store.$app = app.config.globalProperties;
  return store;
}

export default createStore;
