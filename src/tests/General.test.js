import { render, screen } from '@testing-library/react';

//general components
import Subscribe from './components/Subscribe';

// ----------------------------- Subscribe

test('shows subscription promo', () => {
  render(<Subscribe/>);
  expect(screen.queryByText(/subscribe/i)).toBeInTheDocument();
  expect(screen.queryByText(/off/i)).toBeInTheDocument();
});

test('email input and submit button render', () => {
  render(<Subscribe />);
  const input = screen.getByPlaceholderText(/email/i);
  const button = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});


// ---------------------
// test('matches snapshot', () => {
//   const { asFragment } = render(<MyComponent />);
//   expect(asFragment()).toMatchSnapshot();
// });



