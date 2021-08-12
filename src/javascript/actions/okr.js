import { GET_OKRS, UPDATE_LOADER_STATUS, UPDATE_OKRS } from './types';

export const getOkrs = () => {
    return { type: GET_OKRS };
};

export const updateOkrs = okrChanges => {
    return { type: UPDATE_OKRS, okrChanges };
};

export const updateLoaderStatus = show => {
    return { type: UPDATE_LOADER_STATUS, show };
};
