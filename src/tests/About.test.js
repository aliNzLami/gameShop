import { render, screen } from '@testing-library/react';
import About from '../pages/About/About';

test('render heading', () => {
  render(<About />);
  const heading = screen.queryByText(/about/i );
  expect(heading).toBeInTheDocument();
});

test('renders the img with a non-empty src attribute', () => {
  render(<About />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img.getAttribute('src')).not.toBe('');
});

test('renders why choose us content', () => {
  const { container } = render(<About />);

  // header
  const heading = screen.queryByText(/choose us/i);
  expect(heading).toBeInTheDocument();

  // boxes
  const boxes = container.getElementsByClassName("whyChooseUsBox");
  expect(boxes).toHaveLength(3);
});