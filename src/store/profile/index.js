export default {
  namespaced: true,
  state: () => ({
    user: null,
    stared: null,
    repositories: null,
  }),
  mutations: {
    setUser(state, { user }) {
      state.user = user;
    },
    setRepos(state, { repos }) {
      state.repositories = repos;
    },
    setStared(state, { stared }) {
      state.stared = stared;
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
        const { data: user } = await this.$app.$api.get('/user');
        const { data: repos } = await this.$app.$api.get('/user/repos');
        commit('setRepos', { repos });
        commit('setUser', { user });
        return user;
      } catch (e) {
        await dispatch('logout');
        return null;
      }
    },
    logout({ commit }) {
      localStorage.clear();
      commit('setUser', { user: null });
    },
    async getStared({ commit }) {
      try {
        const { data } = await this.$app.$api.get('/user/starred');
        commit('setStared', { stared: data });
        return data;
      } catch (e) {
        return null;
      }
    },
  },
};
