import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../../assets/context/ShopContext"
import CustomCollection from '../../components/Collection/CustomCollection';


function BestSeller() {

    const shopData = useContext(ShopContext) || {};
    const [ bestSellers, setBestSellers ] = useState([]);

    useEffect(() => {
        if(shopData.products) {
            const filteredProducts = shopData.products.filter(item => item.bestSeller);
            setBestSellers(filteredProducts);
        }
    }, [])

    return (
        <section className='mb-10'>
            <CustomCollection
                text1={'BEST'} 
                text2={"SELLERS"}
                productList={bestSellers}
            />
        </section>
    )
}

export default BestSeller;