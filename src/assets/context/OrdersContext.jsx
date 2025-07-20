import { createContext, useState } from "react";

export const OrdersContext = createContext();

const OrdersProvider = (props) => {

    const [ordersList, setOrdersList] = useState([]);

    const updateOrdersList = (newList) => {        
        localStorage.setItem("ordersList", JSON.stringify(newList));
        setLocalOrders();
    }

    const setLocalOrders = () => {
        const itemList = localStorage.getItem("ordersList");
        itemList ? setOrdersList(JSON.parse(itemList)) : setOrdersList([])
    }

    const value = {
        ordersList,
        updateOrdersList,
        setLocalOrders
    }

    return (
        <OrdersContext.Provider value={value}>
            { props.children }
        </OrdersContext.Provider>
    )
}


export default OrdersProvider;