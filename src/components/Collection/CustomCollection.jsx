import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../../assets/context/ShopContext"
import Title from "./Title";
import ProductCard from "./ProductCard"

function CustomCollection({ text1, text2, description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod perferendis", productList, marginTop = true }) {

    const shopData = useContext(ShopContext);
    
    return (
        <div className={`collectionHolder ${marginTop && 'mt-20'}`}>
            <div className="showSmoothly">
                <div className='text-center text-3xl'>
                    <Title text1={text1} text2={text2} />
                </div>
                <p className='w-3/4 m-auto text-18 sm:text-sm md:text-base text-gray-400 text-center mb-15'>
                    { description }
                </p>
            </div>

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