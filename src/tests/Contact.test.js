import { render, screen } from '@testing-library/react';
import Contact from '../pages/Contact/Contact';

test('renders Contact Us heading', () => {
  render(<Contact />);
  const heading = screen.queryByText(/contact/i );
  expect(heading).toBeInTheDocument();
});

test('renders an img with a non-empty src attribute', () => {
  render(<Contact />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img.getAttribute('src')).not.toBe('');
});

test('renders section address', () => {
  const { container } = render(<Contact />);
  const address = container.getElementsByTagName("address")[0];
  expect(address).toBeInTheDocument();
});

