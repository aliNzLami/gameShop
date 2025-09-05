import { render, screen, waitFor } from '@testing-library/react';

// route
import { MemoryRouter } from 'react-router';

// Context Providers
import ShopContextProvider from '../assets/context/ShopContext.jsx';
import RouteContextProvider from '../assets/context/RouteContext.jsx';
import SearchContextProvider from '../assets/context/SearchContext.jsx';
import InCartContextProvider from '../assets/context/InCartContext.jsx';
import OrdersProvider from '../assets/context/OrdersContext.jsx';
import ProfileContextProvider from '../assets/context/ProfileContext.jsx';

//general components
import Subscribe from '../components/Subscribe';
import Footer from '../components/Footer/Footer.jsx';
import Navbar from '../components/Navbar/Navbar.jsx';


const renderPage = (component) => {
  return render(
      <MemoryRouter>
          <RouteContextProvider>
            <ShopContextProvider>
              <SearchContextProvider>
                <InCartContextProvider>
                  <OrdersProvider>
                    <ProfileContextProvider>
                      { component }
                    </ProfileContextProvider>
                  </OrdersProvider>
                </InCartContextProvider>
              </SearchContextProvider>
            </ShopContextProvider>
          </RouteContextProvider>
      </MemoryRouter>
  );
}

// ----------------------------- Subscribe

test('subscription component', () => {
  render(<Subscribe/>);
  
  expect(screen.queryByText(/subscribe/i)).toBeInTheDocument();
  expect(screen.queryByText(/off/i)).toBeInTheDocument();
  
  const input = screen.getByPlaceholderText(/email/i);
  const button = screen.getByRole('button');
  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test('footer component', () => {
  renderPage(<Footer />)
  
  // renders headers
  const shop = screen.queryByText(/SHOP/i );
  const inTouch = screen.queryByText(/IN TOUCH/i );
  expect(shop).toBeInTheDocument();
  expect(inTouch).toBeInTheDocument();

  // renders logo
  const img = screen.getByRole('img');
  expect(img).toHaveAttribute('src');
  expect(img.getAttribute('src')).not.toBe('');

  // renders navs and addresses
  const footerNav = screen.getByTestId('footerNav').getElementsByTagName("li").length;
  const footerAddress = screen.getByTestId('footerAddress').getElementsByTagName("li").length;
  expect(Boolean(footerNav)).toBe((footerNav > 0));
  expect(Boolean(footerAddress)).toBe(footerAddress > 0);
});


test('navbar component', async () => {
  renderPage(<Navbar />)
  
  await waitFor(() => {

    // renders logo, search, cart, profile icons
    const logo = screen.getByTestId("logo").getElementsByTagName("img")[0].getAttribute("src");
    const cart = screen.getByTestId("cart").getElementsByTagName("img")[0].getAttribute("src");
    const search = screen.getByTestId("search").getElementsByTagName("img")[0].getAttribute("src");
    const profile = screen.getByTestId("profile").getElementsByTagName("img")[0].getAttribute("src");
    expect(logo).not.toBe("");
    expect(cart).not.toBe("");
    expect(search).not.toBe("");
    expect(profile).not.toBe("");


    // renders navbar links
    const navbar_lg = [...screen.getByTestId("navbar_lg").children].length;
    expect(Boolean(navbar_lg)).toBe(navbar_lg > 0);
  })
});



// ---------------------
// test('matches snapshot', () => {
//   const { asFragment } = render(<MyComponent />);
//   expect(asFragment()).toMatchSnapshot();
// });



