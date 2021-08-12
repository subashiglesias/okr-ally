import { fork, all } from 'redux-saga/effects';
import okrSaga from "./okr-saga";

export default function* rootSaga() {
    yield all([
        fork(okrSaga)
    ]);
}