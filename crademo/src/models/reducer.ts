import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { allReducer } from '@/models/all/reducer';
import { aReducer } from '@/models/a/reducer';
import { cReducer } from '@/models/c/reducer';

export default combineReducers({
  all: allReducer,
  a: aReducer,
  c: cReducer,
  router: routerReducer //将 reducer 声明到 store 里面的 router 键
});
