import { render, screen, fireEvent, waitFor } from '@testing-library/react';

// context
import RouteContextProvider from '../assets/context/RouteContext.jsx';
import ProfileContextProvider from '../assets/context/ProfileContext.jsx';
import InCartContextProvider from '../assets/context/InCartContext.jsx';
import ShopContextProvider from '../assets/context/ShopContext.jsx';

// component
import Cart from '../pages/Cart/Cart.jsx';

// route
import { MemoryRouter } from 'react-router';



const renderPage = (productsForTest) => {
    return render(
        <MemoryRouter>
            <RouteContextProvider>
                <ProfileContextProvider>
                    <InCartContextProvider>
                        <ShopContextProvider>
                            <Cart productsForTest={productsForTest} />
                        </ShopContextProvider>
                    </InCartContextProvider>
                </ProfileContextProvider>
            </RouteContextProvider>
        </MemoryRouter>
    );
}

const MOCK_PRODCUTS = [
    {
        product: {
            _id: "77cbc257e66302866cf6191754c0c8e3",
            name: "Tekken 1",
            price: 35,
            availabe: 10,
        },
        platform: {
            name: 'ps1',
            pic: ''
        },
        number: 2
    }
]


test('renders empty page', async () => {
    renderPage(null);

    await waitFor(() => {
        const empty = screen.queryByText(/empty/i);
        const zero = screen.queryAllByText(/0/i);

        expect(empty).toBeInTheDocument();
        expect(zero).not.toHaveLength(0);
    })
});

test('renders page with products list', async () => {
    const { container } = renderPage(MOCK_PRODCUTS);

    await waitFor(() => {
        const empty = screen.queryByText(/empty/i);
        const products = [...container.getElementsByClassName('CartItemForTest')]

        expect(empty).not.toBeInTheDocument();
        expect(products).not.toHaveLength(0);
    })
});