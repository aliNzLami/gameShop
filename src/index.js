import { createRoot } from 'react-dom/client'
import {HashRouter} from "react-router-dom"
import App from './App.jsx';

// CSS Files
import './assets/css/general.css';
import './assets/css/font.css';
import './assets/css/navbar.css';
import './assets/css/home.css';
import './assets/css/footer.css';
import './assets/css/collection.css';
import './assets/css/product.css';
import './assets/css/cartOrder.css';

// Context Providers
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './assets/context/ShopContext.jsx';
import RouteContextProvider from './assets/context/RouteContext.jsx';
import SearchContextProvider from './assets/context/SearchContext.jsx';
import InCartContextProvider from './assets/context/InCartContext.jsx';
import OrdersProvider from './assets/context/OrdersContext.jsx';
import ProfileContextProvider from './assets/context/ProfileContext.jsx';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <RouteContextProvider>
      <ShopContextProvider>
        <SearchContextProvider>
          <InCartContextProvider>
            <OrdersProvider>
              <ProfileContextProvider>
                <App />
              </ProfileContextProvider>
            </OrdersProvider>
          </InCartContextProvider>
        </SearchContextProvider>
      </ShopContextProvider>
    </RouteContextProvider>
  </HashRouter>,
)

reportWebVitals();
