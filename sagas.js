import {delay } from 'redux-saga';
import {put, takeEvery, all, call} from 'redux-saga/effects';

export function* helloSaga(){
    console.log("Hey Sagas~")
}


//worker Sagas
export function* incrementAsync(){
  yield call(delay, 1000)//call givewn function
  yield put({ type: 'INCREMENT'}) //dispatch an actionwith given object
}

//Saga watchers
export function* watchIncrmentAsync(){
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* rootSaga(){
  yield all([
    helloSaga(),
    watchIncrmentAsync()
  ])
}
