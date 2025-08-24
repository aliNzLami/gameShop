import React, { createContext } from "react";

// const Home = React.lazy(() => import('../../pages/Home/Home'))
import Home from '../../pages/Home/Home';
const Login = React.lazy(() => import('../../pages/Login/Login'))
const About = React.lazy(() => import('../../pages/About/About'))
const Orders = React.lazy(() => import('../../pages/Orders/Orders'))
const OrdersList = React.lazy(() => import('../../pages/Orders/OrdersList'))
const Product = React.lazy(() => import('../../pages/Product/Product'))
const Contact = React.lazy(() => import('../../pages/Contact/Contact'))
const Collection = React.lazy(() => import('../../pages/Collection/Collection'))
const Cart = React.lazy(() => import('../../pages/Cart/Cart'))
const Profile = React.lazy(() => import('../../pages/Profile/Profile'))

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
