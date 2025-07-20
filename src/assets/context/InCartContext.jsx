import { createContext, useState } from "react";

export const InCartContext = createContext();

const InCartContextProvider = (props) => {

    const [inCartItems, setInCartItems] = useState([]);

    const updateInCart = (newList) => {        
        localStorage.setItem("inCartItems", JSON.stringify(newList));
        setLocalItems();
    }

    const setLocalItems = () => {
        const itemList = localStorage.getItem("inCartItems");
        itemList ? setInCartItems(JSON.parse(itemList)) : setInCartItems([])
    }

    const value = {
        inCartItems,
        setLocalItems,
        updateInCart
    }

    return (
        <InCartContext.Provider value={value}>
            { props.children }
        </InCartContext.Provider>
    )
}


export default InCartContextProvider;