import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Profile from '../pages/Profile/Profile';

test('renders Profile heading', async () => {
    render(<Profile />);
    await waitFor(() => {
        const heading = screen.queryByText(/profile/i );
        expect(heading).toBeInTheDocument();
    })
});

test('all inputs exist, and all are disable', async () => {
    const { container } = render(<Profile />);

    await waitFor(() => {
        const inputs = [...container.getElementsByTagName("input")];
        expect(inputs).not.toHaveLength(0);
    
        for(let input of inputs) {
            expect(input.getAttribute('disabled')).toBe("");
        }
    })
});

test('click on edit btn: inputs are not disable', async () => {
    const { container } = render(<Profile />);

    await waitFor(() => {
        const inputs = [...container.getElementsByTagName("input")];
        const editBtn = screen.getByTestId("editProfile");
    
        fireEvent.click(editBtn)
    
        for(let input of inputs) {
            expect(input.getAttribute('disabled')).toBe(null);
        }
    })
});

test('toggle btn txt', async () => {
    const { container } = render(<Profile />);
    await waitFor(() => {
        const editBtn = screen.getByRole("button");
        const txt = editBtn.innerHTML;

        fireEvent.click(editBtn);

        expect(editBtn.innerHTML).not.toBe(txt);
    })
});