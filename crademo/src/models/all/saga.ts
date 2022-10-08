
import {fork, put, take, call, all, takeEvery, throttle, select} from 'redux-saga/effects';

function *initApp () {
  try {
    
  } catch (error) {
    console.error(error);
  }
}

export default function* () {
  yield fork(initApp);
}