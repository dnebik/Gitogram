import { createStore as createVuexStore } from 'vuex';
import repos from '@/store/repos';

function createStore(app) {
  const store = createVuexStore({
    modules: {
      repos,
    },
  });
  store.$app = app.config.globalProperties;
  return store;
}

export default createStore;
