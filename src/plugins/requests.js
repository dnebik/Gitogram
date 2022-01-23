import axios from 'axios';

const requests = {
  install(vm) {
    // eslint-disable-next-line no-param-reassign
    vm.config.globalProperties.$api = axios.create({
      baseURL: 'https://api.github.com',
    });
  },
};

export default requests;
