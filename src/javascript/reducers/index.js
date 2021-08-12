import { combineReducers } from 'redux';
import okr from './okr-reducer'

export const rootReducer = {
    okr,
};

export default combineReducers(rootReducer);