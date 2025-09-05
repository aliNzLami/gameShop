import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../../assets/context/ShopContext"
import Title from "./Title";
import ProductCard from "./ProductCard"
import HeaderCollection from './HeaderCollection';

function CustomCollection({ text1, text2, description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod perferendis", productList, marginTop = true }) {

    const shopData = useContext(ShopContext);
    
    return (
        <div className={`collectionHolder ${marginTop && 'mt-20'}`}>
            <HeaderCollection
                text1={'ALL'} 
                text2={"COLLECTIONS"}
            />

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6" data-testid='productsHolder'>
                {
                    productList.length &&
                    productList.map((item) => 
                        <div key={item._id}>
                            <ProductCard productItem={item} currencies={shopData.currencies} />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default CustomCollection