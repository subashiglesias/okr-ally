import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {INITIAL_STATE} from "./javascript/stubs";

export const reducer = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};


const render = (
    ui,
    {
        initialState = {
            okr: {INITIAL_STATE}
        },
        store = createStore(reducer, initialState),
        withRouter = false,
        ...renderOptions
    } = {}
) => {
    function Wrapper({ children }) {
        const providerWrapped = <Provider store={store}>{children}</Provider>;
        return providerWrapped;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { render };