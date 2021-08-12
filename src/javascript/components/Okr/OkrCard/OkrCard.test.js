import React from "react";
import {render} from '../../../../testUtils';
import { useSelector } from "react-redux";
import {screen} from '@testing-library/react';
import OkrCard from './OkrCard';
import {INITIAL_STATE} from "../../../stubs";
import userEvent from "@testing-library/user-event";

jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

describe('OkrCard Component', () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => callback(INITIAL_STATE));
    });
    afterEach(() => {
        useSelector.mockClear();
    });

    test('renders OkrCard component', () => {
        render(<OkrCard cardData={INITIAL_STATE.okr.okrResults['COM0010']} dispatch={jest.fn()} index={1} id={'COM0010'}/>)
        expect(screen.getAllByRole('button')).toHaveLength(1);
        expect(screen.getByText('1. Research and improve customer satisfaction')).toBeInTheDocument();
        expect(screen.getByText('Exceed Net Promoter Score (NPS) of over 8.0')).toBeInTheDocument();
    });

    test('should collapse on click', () => {
        render(<OkrCard cardData={INITIAL_STATE.okr.okrResults['COM0010']} dispatch={jest.fn()} index={1} id={'COM0010'}/>)
        expect(screen.getByText('1. Research and improve customer satisfaction')).toBeInTheDocument();
        expect(screen.getByText('Exceed Net Promoter Score (NPS) of over 8.0')).toBeInTheDocument();
        userEvent.click(screen.getByRole('button'));
        expect(screen.queryByText('Exceed Net Promoter Score (NPS) of over 8.0')).not.toBeInTheDocument();
    })

});