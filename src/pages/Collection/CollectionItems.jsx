import React from 'react';
import ProductCard from "../../components/Collection/ProductCard";

function CollectionItems({ list, currencies }) {
    return (
        <div className='collectionsAll'> 
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 gap-y-6">
                {
                    list.map( item => {
                        return (
                            <div key={item._id}>
                                <ProductCard 
                                    productItem={ item } 
                                    currencies={ currencies }
                                />
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default CollectionItems