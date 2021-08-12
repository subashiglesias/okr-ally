import React from "react";
import {render} from '../../../testUtils';
import { useSelector } from "react-redux";
import {screen} from '@testing-library/react';
import Okr from './Okr';
import {INITIAL_STATE} from "../../stubs";
import userEvent from "@testing-library/user-event";


jest.mock("react-redux", () => ({
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn()
}));

describe('Okr Component', () => {
    beforeEach(() => {
        useSelector.mockImplementation(callback => callback(INITIAL_STATE));
    });
    afterEach(() => {
        useSelector.mockClear();
    });

    test('renders Okr component', () => {
        render(<Okr dispatch={jest.fn()}/>)
        expect(screen.getByText('Choose a Category:')).toBeInTheDocument();
        expect(screen.getByText("All")).toBeInTheDocument();
        expect(screen.getAllByRole('button')).toHaveLength(50);
        expect(screen.getByText('1. Research and improve customer satisfaction')).toBeInTheDocument();
        //Checking length below because this value exists twice (under another heading - No.42)
        expect(screen.getAllByText('Exceed Net Promoter Score (NPS) of over 8.0')).toHaveLength(2);
    });

    test('should render only filter values', () => {
        render(<Okr dispatch={jest.fn()}/>)
        expect(screen.getByText('Choose a Category:')).toBeInTheDocument();
        expect(screen.getByText("All")).toBeInTheDocument();
        expect(screen.getByText('1. Research and improve customer satisfaction')).toBeInTheDocument();
        userEvent.selectOptions(screen.getByLabelText("Choose a Category:"), "Finance");
        expect(screen.queryByText('1. Research and improve customer satisfaction')).not.toBeInTheDocument();
    });

    test('should collapse on click of button near heading', () => {
        render(<Okr dispatch={jest.fn()}/>)
        expect(screen.getByText("Hit quarterly revenue of over $1000000")).toBeInTheDocument();
        userEvent.click(screen.getAllByRole('button')[1]);
        expect(screen.queryByText("Hit quarterly revenue of over $1000000")).not.toBeInTheDocument();
    });

    test('should open modal when clicked on a heading', () => {
        render(<Okr dispatch={jest.fn()}/>)
        expect(screen.queryByText("id:")).not.toBeInTheDocument();
        userEvent.click(screen.getByText('1. Research and improve customer satisfaction'));
        expect(screen.getByText("id:")).toBeInTheDocument();
    })

    test('should open modal when clicked on a sub list', () => {
        render(<Okr dispatch={jest.fn()}/>)
        expect(screen.queryByText("id:")).not.toBeInTheDocument();
        expect(screen.queryByText("Parent Objective")).not.toBeInTheDocument();
        userEvent.click(screen.getAllByText('Exceed Net Promoter Score (NPS) of over 8.0')[0]);
        expect(screen.getByText("id:")).toBeInTheDocument();
        expect(screen.getByText("Parent Objective")).toBeInTheDocument();
    })

});