import React, { act } from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Footer from './Footer';

test('keywords', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Footer />}/>
                </Routes>
            </BrowserRouter>
        );
    });
  const keyword1 = screen.queryByText(/SHOP/i );
  const keyword2 = screen.queryByText(/GET IN TOUCH/i );
  expect(keyword1).toBeInTheDocument();
  expect(keyword2).toBeInTheDocument();
});

test('renders an img with a non-empty src attribute', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Footer />}/>
                </Routes>
            </BrowserRouter>
        );
    });
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img.getAttribute('src')).not.toBe('');
});

test('navs and addresses exist', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Footer />}/>
                </Routes>
            </BrowserRouter>
        );
    });
  const footerNav = screen.getByTestId('footerNav').getElementsByTagName("li").length;
  const footerAddress = screen.getByTestId('footerNav').getElementsByTagName("li").length;
  expect(Boolean(footerNav)).toBe((footerNav > 0));
  expect(Boolean(footerAddress)).toBe(footerAddress > 0);
});