const initialState = {
  m: '',
};

export function aReducer(state = initialState, { type, payload }) {
  const nameSpace = 'a';
  switch (type) {
    case `${nameSpace}/setM`:
      return {
        ...state,
        m: `${state.m},${payload}`
      };
    default:
      return state;
  }
}