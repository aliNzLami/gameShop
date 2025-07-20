import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../../assets/context/ShopContext"
import CustomCollection from '../../components/Collection/CustomCollection';

function LatesCollection() {

    const shopData = useContext(ShopContext);
    const [ latestProduct, setLatestProduct ] = useState([]);

    useEffect(() => {
      setLatestProduct(shopData.products.slice(0, 15));
    }, [])

    
    return (
        <CustomCollection 
            text1={'LATEST'} 
            text2={"COLLECTIONS"}
            productList={latestProduct}
        />
    )
}

export default LatesCollection;