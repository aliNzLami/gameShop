import React, { useContext } from 'react';
import { RouteContext } from '../../assets/context/RouteContext';


function ProductCard({productItem, currencies}) {

    const routesList = useContext(RouteContext);

    return (
        <div className='text-gray-700 cursor-pointer'>
            <a className='cardLink' href={routesList.product.url.replace(':productId', productItem._id)}>
                <div className="overflow-hidden imgRatio productCard_imgHolder">
                    <div>
                        <img className='hover:scale-110 transition ease-in-out' src={productItem.pic} />
                    </div>
                </div>
                <p className='pt-3 pb-1 text-sm'>
                    { productItem.name }
                </p>
                <p className='text-sm font-medium'>
                    <span>
                        { currencies.uk.sign }
                    </span>
                    <span>
                        { productItem.price }
                    </span>
                </p>
            </a>
        </div>
    )
}

export default ProductCard;