import {put, call} from 'redux-saga/effects';
import {getOkrs} from '../api/Okrs';
import {GET_OKRS} from "../actions/types";
import {updateLoaderStatus, updateOkrs} from "../actions";
import {takeEvery} from "@redux-saga/core/effects";

export const getOkrResults = function* () {
    try {
        yield put(updateLoaderStatus(true))
        const okrResults = yield call(getOkrs);
        yield put(updateOkrs(okrResults.data));
        yield put(updateLoaderStatus(false))
    } catch (error) {
        console.log('error')
        yield put(updateLoaderStatus(false))
        yield put(updateOkrs([]));
    }
};

export default function* okrSaga() {
    yield takeEvery(GET_OKRS, getOkrResults)
}