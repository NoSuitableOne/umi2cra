export default {
  namespace: 'all',

  state: {
    loading: false
  },

  effects: {
  },

  reducers: {
    showLoading(state) {
      return {
        ...state,
        loading: !state.loading
      };
    }
  }
};
