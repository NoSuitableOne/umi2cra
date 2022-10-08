const initialState = {
  loading: false,
};

export function allReducer(state = initialState, action) {
  const nameSpace = 'all';
  switch (action.type) {
    case `${nameSpace}/showLoading`:
      return {
        ...state,
        loading: !state.loading
      };
    default:
      return state;
  }
}