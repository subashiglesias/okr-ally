import React from "react";
import {render, screen} from '@testing-library/react';
import OkrItem from './OkrItem';
import {INITIAL_STATE} from "../../../stubs";


describe('OkrItem Component', () => {
    test('renders okrItem component parent', () => {
        render(<OkrItem id={'COM0010'} data={INITIAL_STATE.okr.okrResults['COM0010']} index={1} />);
        expect(screen.getByText('1. Research and improve customer satisfaction')).toBeInTheDocument();
    });

    test('renders okrItem component child', () => {
        render(<OkrItem id={'COM0011'} data={INITIAL_STATE.okr.okrResults['COM0011']} parentTitle={"Yoo"} />);
        expect(screen.getByText('Exceed Net Promoter Score (NPS) of over 8.0')).toBeInTheDocument();
    });

});
