import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

test('renders About Us heading', () => {
  render(<About />);
  const heading = screen.queryByText(/about/i );
  expect(heading).toBeInTheDocument();
});

test('renders an img with a non-empty src attribute', () => {
  render(<About />);
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img.getAttribute('src')).not.toBe('');
});


test('renders section heading', () => {
  render(<About />);
  const heading = screen.queryByText(/choose us/i);
  expect(heading).toBeInTheDocument();
});


test('displays all three feature boxes', () => {
  const { container } = render(<About />);
  const boxes = container.getElementsByClassName("whyChooseUsBox");
  expect(boxes).toHaveLength(3);
});