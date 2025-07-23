import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Cart from './Cart';


test('proceed btn exist', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="*" element= {<Cart />}/>
            </Routes>
        </BrowserRouter>
    );
    waitFor(() => {
        const proceedBtn = screen.getByTestId("proceedBtn");
        expect(proceedBtn).toBeInTheDocument();
    })
});

test('after click on proceed', () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="*" element= {<Cart />}/>
            </Routes>
        </BrowserRouter>
    );
    waitFor(() => {
        const proceedBtn = screen.getByTestId("proceedBtn");
        fireEvent.click(proceedBtn);
        const login = screen.getByTestId("loginHeader");
        if(localStorage.getItem("profile")) {
            expect(login).toBeInTheDocument();
        }
        else {
            expect(login).not.toBeInTheDocument();
        }
    })
});