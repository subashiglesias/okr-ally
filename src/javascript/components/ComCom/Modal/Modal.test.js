import React from "react";
import { render, screen } from '@testing-library/react';
import Modal from './Modal';

test('renders learn react link', () => {
    render(<Modal header="Exceed Net Promoter Score (NPS) of over 8.0" children={[<span><b>id:</b> COM0013</span>, <span><b>category:</b> Company</span>, <span><b>title:</b> Conduct 50 phone interviews with top customers</span>, <span><b>metric_name:</b> Interview conducted</span>, <span><b>metric_start:</b> 0</span>, <span><b>metric_target:</b> 50</span>, <span><b>parent_objective_id:</b> COM0010</span>, <span><b>archived:</b> </span>, <span><b>Parent Objective</b>: Research and improve customer satisfaction</span>]} updateModalState={() => {}}/>);
    expect(screen.getByText("Exceed Net Promoter Score (NPS) of over 8.0")).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
});
