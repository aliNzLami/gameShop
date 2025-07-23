import React from 'react';
import { render, screen } from '@testing-library/react';

//general components
import Subscribe from './components/Subscribe';

// ----------------------------- Subscribe

test('shows subscription promo', () => {
  render(<Subscribe/>);
  expect(screen.queryByText(/subscribe now/i)).toBeInTheDocument();
  expect(screen.queryByText(/20% off/i)).toBeInTheDocument();
});



test('email input and submit button render', () => {
  render(<Subscribe />);
  const input = screen.getByPlaceholderText(/enter your email/i);
  const button = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});



