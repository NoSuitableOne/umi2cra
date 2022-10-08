import { fork } from 'redux-saga/effects';
import allSaga from '@/models/all/saga';

function* rootSaga() {
  yield fork(allSaga);
}
export default rootSaga;
