import { createContext } from "react";
import { products } from "../products/products";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currencies = {
        us: {name: "dollerUS", sign: "$"},
        uk: {name: "Pound", sign: "£"},
        jp: {name: "Yen", sign: "¥"},
        sw: {name: "Franc", sign: "Fr"},
        eu: {name: "Euro", sign: "€"},
    }

    const delivery_fee = 10;

    const value = {
        products, currencies, delivery_fee
    }

    return (
        <ShopContext.Provider value={value}>
            { props.children }
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;