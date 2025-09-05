import { render, screen } from '@testing-library/react';
import Profile from '../pages/Profile/Profile';

test('renders Profile heading', () => {
    render(<Profile />);
    const heading = screen.queryByText(/profile/i );
    expect(heading).toBeInTheDocument();
});

test('all inputs exist, and all are disable', () => {
    const { container } = render(<Profile />);
    const inputs = [...container.getElementsByTagName("input")];
    
    expect(inputs).not.toHaveLength(0);

    for(let input of inputs) {
        expect(input.getAttribute('disabled')).toBe("");
    }
});

test('all inputs exist, and all are disable', () => {
    const { container } = render(<Profile />);
    const buttons = [...container.getElementsByTagName("button")];
    
    expect(buttons).not.toHaveLength(0);
});

// test('click on edit btn, inputs are not disable', () => {
//     const { container } = render(<Profile />);
//     const inputs = [...container.getElementsByTagName("input")];
//     const editBtn = screen.getByTestId("editProfile");

//     fireEvent.click(editBtn)
//     for(let input of inputs) {
//         expect(input.getAttribute('disabled')).toBe(null);
//     }
// });