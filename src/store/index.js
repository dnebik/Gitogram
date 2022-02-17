import { createStore as createVuexStore } from 'vuex';
import repos from '@/store/repos';
import profile from '@/store/profile';

const store = {
  value: null,
};

export function createStore(app) {
  const createdStore = createVuexStore({
    modules: {
      repos,
      profile,
    },
  });
  store.value = createdStore;
  createdStore.$app = app.config.globalProperties;
  return createdStore;
}

export default store;
