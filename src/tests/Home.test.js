import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// component
import Home from '../pages/Home/Home';

// route
import { MemoryRouter } from 'react-router';

// context
import RouteContextProvider from '../assets/context/RouteContext.jsx';
import ShopContextProvider from '../assets/context/ShopContext.jsx';



const renderPage = () => {
    return render(
        <MemoryRouter>
            <ShopContextProvider>
                <RouteContextProvider>
                    <Home />
                </RouteContextProvider>
            </ShopContextProvider>
        </MemoryRouter>
    );
}

test('renders all components', async () => {
    const { container } = renderPage();

    await waitFor(() => {
        const header = screen.queryByText(/life/i );
        const video = container.getElementsByTagName("video");
        const latest = screen.queryByText(/latest/i );
        const policyItems = [...container.getElementsByClassName("policyItem")];
        const experience = screen.queryByText(/EXPERIENCE/i);

        
        expect(header).toBeInTheDocument();
        expect(video).not.toHaveLength(0);
        expect(latest).toBeInTheDocument();
        expect(policyItems).not.toHaveLength(0);
        expect(experience).toBeInTheDocument();
    })
});