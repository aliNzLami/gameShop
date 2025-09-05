import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../../assets/context/ShopContext"
import CustomeCarousel from '../../components/CustomeCarousel';
import HeaderCollection from '../../components/Collection/HeaderCollection';

function BestSeller() {

    const shopData = useContext(ShopContext);
    const [ bestSellers, setBestSellers ] = useState([]);

    useEffect(() => {
        if(shopData.products) {
            const filteredProducts = shopData.products.filter(item => item.bestSeller);
            setBestSellers(filteredProducts);
        }
    }, [shopData.products])

    return (
        <section className='mb-10'>

            <HeaderCollection 
                text1={'BEST'} 
                text2={"SELLERS"}
            />
            <CustomeCarousel
                list={bestSellers}
            />
        </section>
    )
}

export default BestSeller;