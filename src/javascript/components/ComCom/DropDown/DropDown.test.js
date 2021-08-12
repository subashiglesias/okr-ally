import React from "react";
import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';
import userEvent from "@testing-library/user-event";


describe('DropDown Component', () => {
    test('renders dropdown component', () => {
        render(<DropDown label="Choose One" defaultValue="All" values={["All", "One", "Two"]}/>);
        expect(screen.getByText('Choose One')).toBeInTheDocument();
    });

    test('change values on click', () => {
        render(<DropDown className="test" label="Choose One" defaultValue="All" values={["All", "One", "Two"]}/>);
        expect(screen.getAllByText('All')).toHaveLength(2);
        expect((screen.getAllByText('All')[0]).selected).toBeTruthy();
        userEvent.selectOptions(screen.getByLabelText('Choose One'), 'One');
        expect((screen.getAllByText('One')[0]).selected).toBeTruthy();
    })

});
