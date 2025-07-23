import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router';


test('header: login', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Login />}/>
                </Routes>
            </BrowserRouter>
        );
    });
    const header = screen.getByTestId ("loginHeader");
    expect(header).toBeInTheDocument();
});

test('toggle header between login and sign up', () => {
    act(() => {
        render(
            <BrowserRouter>
                <Routes>   
                    <Route path="*" element= {<Login />}/>
                </Routes>
            </BrowserRouter>
        );
    });
    const header = screen.getByTestId ("loginHeader");

    const signUpBtn_transparent = screen.getByTestId ("signUpBtn_transparent");
    fireEvent.click(signUpBtn_transparent);
    expect(header.innerHTML).toBe("Sign Up");
     
    const loginBtn_transparent = screen.getByTestId ("loginBtn_transparent");
    fireEvent.click(loginBtn_transparent);
    expect(header.innerHTML).toBe("Login");
});
