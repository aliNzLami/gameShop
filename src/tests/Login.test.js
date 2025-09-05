import { render, screen, fireEvent } from '@testing-library/react';

// context
import RouteContextProvider from '../assets/context/RouteContext.jsx';
import ProfileContextProvider from '../assets/context/ProfileContext.jsx';

// component
import Login from '../pages/Login/Login';

// route
import { MemoryRouter } from 'react-router';


const renderPage = () => {
    return render(
        <MemoryRouter>
            <RouteContextProvider>
                <ProfileContextProvider>
                    <Login />
                </ProfileContextProvider>
            </RouteContextProvider>
        </MemoryRouter>
    );
}


test('renders header', () => {
    renderPage();
    
    const header = screen.getByTestId ("loginHeader");
    expect(header).toBeInTheDocument();
});


test('renders inputs and buttons', () => {
    const { container } = renderPage();
    
    const inputs = [...container.getElementsByTagName('input')];
    const buttons = [...container.getElementsByTagName('button')];
    
    expect(inputs).not.toHaveLength(0);
    expect(buttons).not.toHaveLength(0);
});

// test('toggle sign in / sign up', () => {
//     renderPage();
    
//     const inputs = screen.getByTestId ("changeSign");
// });

