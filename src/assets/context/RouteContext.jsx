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
        home: { name: "HOME", url: "/gameShop/", element: <Home /> },
        login: { name: "LOGIN", url: "/gameShop/login", element: <Login /> },
        about: { name: "ABOUT US", url: "/gameShop/about", element: <About /> },
        orders: { name: "ORDERS", url: "/gameShop/orders", element: <Orders /> },
        ordersList: { name: "ORDERS LIST", url: "/gameShop/ordersList", element: <OrdersList /> },
        product: { name: "PRODUCT", url: "/gameShop/product/:productId", element: <Product /> },
        contact: { name: "CONTACT", url: "/gameShop/contact", element: <Contact /> },
        collection: { name: "COLLECTION", url: "/gameShop/collection", element: <Collection /> },
        cart: { name: "CART", url: "/gameShop/cart", element: <Cart /> },
        profile: { name: "Profile", url: "/gameShop/profile", element: <Profile /> },
    };

    return (
        <RouteContext.Provider value={routesList}>
            {props.children}
        </RouteContext.Provider>
    );
};

export default RouteContextProvider;
