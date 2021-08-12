import { fork, all } from 'redux-saga/effects';
import okrSaga from "./okr-saga";

//import future sagas here

export default function* rootSaga() {
    yield all([
        fork(okrSaga)
    ]);
}