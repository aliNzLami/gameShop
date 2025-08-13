import React, { useState, useEffect, useContext } from 'react';

// context
import { ShopContext } from "../../assets/context/ShopContext"
import HeaderCollection from '../../components/Collection/HeaderCollection';
import CustomeCarousel from '../../components/CustomeCarousel';

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
        <section className='mt-30'>
            {
                relatedProducts.length 
                ?
                    <>
                        <HeaderCollection 
                            text1={"More of"}
                            text2={selectedProduct.productData.company[0].name}
                        />

                        <CustomeCarousel
                            list={relatedProducts}
                        />
                    </>


                :
                    ""
            }
        </section>
    )
}

export default RelatedProducts