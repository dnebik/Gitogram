export default {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
  },
  actions: {
    async getUser({ state, commit, dispatch }) {
      if (state.user) {
        return state.user;
      }

      const token = localStorage.getItem('token');
      if (!token) {
        return null;
      }
      this.$app.$api.defaults.headers.Authorization = `token ${ token }`;

      try {
        const { data } = await this.$app.$api.get('/user');
        commit('setUser', { user: data });
        return data;
      } catch (e) {
        await dispatch('logout');
        return null;
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit('setUser', { user: null });
    },
  },
};
