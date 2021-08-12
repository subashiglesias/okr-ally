import { combineReducers } from 'redux';
import okr from './okr-reducer'

//import future reducers here

export const rootReducer = {
    okr,
};

export default combineReducers(rootReducer);