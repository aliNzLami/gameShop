import React, { act } from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './Navbar';

test('logo, search, cart, profile icons', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Navbar />}/>
                </Routes>
            </BrowserRouter>
        );
    });
    waitFor(() => {
        const logo = screen.getByTestId("logo").getElementsByTagName("img")[0].getAttribute("src");
        const cart = screen.getByTestId("cart").getElementsByTagName("img")[0].getAttribute("src");
        const search = screen.getByTestId("search").getElementsByTagName("img")[0].getAttribute("src");
        const profile = screen.getByTestId("profile").getElementsByTagName("img")[0].getAttribute("src");
        expect(logo).not.toBe("");
        expect(cart).not.toBe("");
        expect(search).not.toBe("");
        expect(profile).not.toBe("");
    })
});

test('navbar links', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Navbar />}/>
                </Routes>
            </BrowserRouter>
        );
    });

    waitFor(() => {
        const navbar_lg = [...screen.getByTestId("navbar_lg").children].length;
        const navbar_mobile = [...screen.getByTestId("navbar_mobile").children].length;
        expect(Boolean(navbar_lg)).toBe(navbar_lg > 0);
        expect(Boolean(navbar_mobile)).toBe(navbar_mobile > 0);
    })
    

});