import {UPDATE_OKRS, UPDATE_LOADER_STATUS} from '../actions/types';

const initialState = {
    okrResults: {},
    parentIds: [],
    parentWithChildren: {},
    showLoader: true,
    category: []
};

export default function okr(state = initialState, action) {
    switch (action.type) {
        case UPDATE_OKRS: {
            const okrs = action.okrChanges;
            const parentIds = [];
            const parentWithChildren = {};
            const okrResults = {};
            const category = new Set();
            if (okrs) {
                okrs.forEach(okr => {
                    okrResults[okr.id] = okr;
                    if (okr.parent_objective_id === '') {
                        parentIds.push(okr.id);
                        category.add(okr.category);
                    } else {
                        parentWithChildren[okr.parent_objective_id] =
                            parentWithChildren[okr.parent_objective_id]
                                ? [...parentWithChildren[okr.parent_objective_id], okr.id] : [okr.id]
                    }
                })
            }
            return {
                ...state,
                okrResults,
                parentIds,
                parentWithChildren,
                category: [...category]
            }
        }
        case UPDATE_LOADER_STATUS: {
            return {...state, showLoader: action.show}
        }
        default:
            return state;
    }
}