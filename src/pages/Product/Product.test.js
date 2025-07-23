import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Product from './Product';

test('renders product heading', () => {
    render(<Product />);
    waitFor(() => {
        const heading = screen.getByTestId("productName");
        expect(heading).toBeInTheDocument();
    })
});

test('renders an img with a non-empty src attribute', () => {
    render(<Product />);
    waitFor(() => {
        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src');
        expect(img.getAttribute('src')).not.toBe('');
    })
});

test('platforms exist', () => {
    render(<Product />);
    waitFor(() => {
        const platforms = screen.getByTestId('platforms').getElementsByTagName("button");
        expect(platforms).toBeInTheDocument();
    })
});

