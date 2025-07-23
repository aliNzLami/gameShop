import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Cart from './Cart';


test('totals exist', async () => {
    render(
        <BrowserRouter>
            <Routes>   
                <Route path="*" element= {<Cart />}/>
            </Routes>
        </BrowserRouter>
    );
    await waitFor(() => {
        const keyword1 = screen.queryByText(/TOTALS/i);
        expect(keyword1).toBeInTheDocument();
    })
});