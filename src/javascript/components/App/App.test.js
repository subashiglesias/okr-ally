import React from "react";
import { render } from '../../../testUtils'
import { screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByText('Ally OKR')).toBeInTheDocument();
});
