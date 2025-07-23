import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile';


test('all inputs are disable', () => {
    const { container } = render(<Profile />);
    const inputs = [...container.getElementsByTagName("input")];

    for(let input of inputs) {
        expect(input.getAttribute('disabled')).toBe("");
    }
});

test('click on edit btn, inputs are not disable', () => {
    const { container } = render(<Profile />);
    const inputs = [...container.getElementsByTagName("input")];
    const editBtn = screen.getByTestId("editProfile");

    fireEvent.click(editBtn)
    for(let input of inputs) {
        expect(input.getAttribute('disabled')).toBe(null);
    }
});