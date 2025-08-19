import React, { useContext, useState, useEffect } from 'react'

import { ShopContext } from "../../assets/context/ShopContext"
import CustomeCarousel from '../../components/CustomeCarousel';
import HeaderCollection from '../../components/Collection/HeaderCollection';

function LatesCollection() {

    const shopData = useContext(ShopContext) || {};
    const [ latestProduct, setLatestProduct ] = useState([]);

    useEffect(() => {
        if(shopData.products) {
            setLatestProduct(shopData.products.slice(0, 15));
        }
    }, [])
    
    return (
        <section className='mt-30'>
            <HeaderCollection 
                text1={'LATEST'} 
                text2={"COLLECTIONS"}
            />

            <CustomeCarousel
                list={latestProduct}
            />
        </section>
    )
}

export default LatesCollection;