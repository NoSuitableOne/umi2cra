export default {
  namespace: 'a',

  state: {
    m: ''
  },

  effects: {
  },

  reducers: {
    setM: (state, {payload}) => {
      return {
        ...state,
        m: `${state.m},${payload}`
      };
    }
  }
};
