import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './assets/context/ShopContext.jsx';
import RouteContextProvider from './assets/context/RouteContext.jsx';
import SearchContextProvider from './assets/context/SearchContext.jsx';
import InCartContextProvider from './assets/context/InCartContext.jsx';
import OrdersProvider from './assets/context/OrdersContext.jsx';
import ProfileContextProvider from './assets/context/ProfileContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
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
  </BrowserRouter>,
)

reportWebVitals();
