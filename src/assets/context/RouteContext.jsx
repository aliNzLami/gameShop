import { createContext } from "react";
import Home from '../../pages/Home/Home';
import Login from "../../pages/Login/Login";
import About from "../../pages/About/About";
import Orders from "../../pages/Orders/Orders";
import OrdersList from "../../pages/Orders/OrdersList";
import Product from "../../pages/Product/Product";
import Contact from "../../pages/Contact/Contact";
import Collection from "../../pages/Collection/Collection";
import Cart from '../../pages/Cart/Cart';
import Profile from "../../pages/Profile/Profile";

export const RouteContext = createContext();

const RouteContextProvider = (props) => {
    const routesList = {
        home: { name: "HOME", url: "/", element: <Home /> },
        login: { name: "LOGIN", url: "/login", element: <Login /> },
        about: { name: "ABOUT US", url: "/about", element: <About /> },
        orders: { name: "ORDERS", url: "/orders", element: <Orders /> },
        ordersList: { name: "ORDERS LIST", url: "/ordersList", element: <OrdersList /> },
        product: { name: "PRODUCT", url: "/product/:productId", element: <Product /> },
        contact: { name: "CONTACT", url: "/contact", element: <Contact /> },
        collection: { name: "COLLECTION", url: "/collection", element: <Collection /> },
        cart: { name: "CART", url: "/cart", element: <Cart /> },
        profile: { name: "Profile", url: "/profile", element: <Profile /> },
    };

    return (
        <RouteContext.Provider value={routesList}>
            {props.children}
        </RouteContext.Provider>
    );
};

export default RouteContextProvider;
