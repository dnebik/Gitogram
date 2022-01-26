import moment from 'moment';

const date = moment()
  .add(-1, 'w')
  .format('YYYY-MM-DD');

export default {
  namespaced: true,
  state: () => ({
    data: [],
    error: null,
    loading: false,
    page: 1,
    per_page: 12,
  }),
  mutations: {
    addData(state, { data }) {
      if (Array.isArray(data)) {
        state.data = [...state.data, ...data];
      } else {
        state.data.push(data);
      }
    },
    setData(state, { data }) {
      state.data = data;
    },
    clear(state) {
      state.data = [];
      state.error = null;
      state.page = 1;
    },
    setError(state, { error }) {
      state.error = error;
    },
    setLoading(state, { loading }) {
      state.loading = loading;
    },
    incrementPage(state) {
      state.page++;
    },
  },
  actions: {
    async load({ commit, dispatch, state }) {
      commit('setLoading', { loading: true });
      try {
        const { data } = await this.$app.$api.get('/search/repositories', {
          params: {
            sort: 'stars',
            q: `language:javascript created:>=${date}`,
            per_page: state.per_page,
            page: state.page,
          },
        });
        commit('addData', { data: data.items });
        commit('incrementPage');
      } catch (e) {
        if (e.response.status === 403) {
          setTimeout(() => {
            dispatch('load');
          }, 6000);
        }
        commit('setError', { error: e });
      } finally {
        commit('setLoading', { loading: false });
      }
    },
  },
};
