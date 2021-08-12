import React from "react";
import { render, screen } from '@testing-library/react';
import Modal from './Modal';
import {CHILDREN_MODAL} from "../../../stubs";

test('renders Modal', () => {
    render(<Modal header="Exceed Net Promoter Score (NPS) of over 8.0" children={CHILDREN_MODAL} updateModalState={() => {}}/>);
    expect(screen.getByText("Exceed Net Promoter Score (NPS) of over 8.0")).toBeInTheDocument();
    expect(screen.getByText("COM0013")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
});
