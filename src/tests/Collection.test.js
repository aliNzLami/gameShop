import { render, screen, waitFor } from '@testing-library/react';

// component
import Collection from '../pages/Collection/Collection';

// context
import ShopContextProvider from '../assets/context/ShopContext.jsx';

// route
import { MemoryRouter } from 'react-router';




const renderPage = () => {
    return render(
        <MemoryRouter>
            <ShopContextProvider>
                <Collection />
            </ShopContextProvider>
        </MemoryRouter>
    );
}


test('renders Collection heading', async () => {
    renderPage()

    await waitFor(() => {
        const heading = screen.queryByText(/COLLECTIONS/i );
        expect(heading).toBeInTheDocument();
    })
});

test('renders products: products aray length must not be zero', async () => {
    const { container } = renderPage();
    
    await waitFor(() => {
        const products = [...container.getElementsByClassName('productCard')];
        expect(products).not.toHaveLength(0);
    })
});

test('filters exist', async () => {
    const { container } = renderPage()

    await waitFor(() => {
        const heading = screen.queryByText(/filter/i );
        expect(heading).toBeInTheDocument();

        const filtersList = [...container.getElementsByClassName('filterbox_collection')];
        expect(filtersList).not.toHaveLength(0);
    })
});