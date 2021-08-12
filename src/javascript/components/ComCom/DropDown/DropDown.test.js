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
        render(<DropDown label="Choose One" defaultValue="All" values={["All", "One", "Two"]}/>);
        expect(screen.getAllByText('All')).toHaveLength(2);
        userEvent.click(screen.getByText('One'));
        expect(screen.getByText('One')).toBeInTheDocument();
    })

});
