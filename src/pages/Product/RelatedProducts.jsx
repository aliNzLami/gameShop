import React, { useState, useEffect, useContext } from 'react';

// context
import { ShopContext } from "../../assets/context/ShopContext"
import CustomCollection from '../../components/Collection/CustomCollection';

function RelatedProducts({ selectedProduct }) {

    const shopData = useContext(ShopContext).products;

    const [relatedProducts, setRelatedProducts] = useState([]);
    
    const make_relatedList = () => {
        let company = selectedProduct.productData.company[0];
        const relatedList = [];
        for(let item of shopData) {
            if(item.company[0].name === company.name && selectedProduct.productData._id !== item._id) {
                relatedList.push(item);
            }
        }
        setRelatedProducts([...relatedList]);
    }

    useEffect(() => {
      make_relatedList();
    }, [])
    
    return (
        <>
            {
                relatedProducts.length 
                ?
                    <CustomCollection 
                        text1={"RELATED"}
                        text2={"COLLECTION"}
                        productList={relatedProducts}
                    />

                :
                    ""
            }
        </>
    )
}

export default RelatedProducts