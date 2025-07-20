import React, { useContext } from 'react';
import { RouteContext } from '../../assets/context/RouteContext';
import { useLocation, useNavigate } from 'react-router-dom';

function ProductCard({productItem, currencies}) {

    const navigate = useNavigate();
    const location = useLocation();

    const routesList = useContext(RouteContext);


    const clickHandler = () => {
        // if(location.pathname.includes("/product")) {
        //     navigate(routesList.product.url.replace(':productId', productItem._id))
        //     window.location.reload();
        // }
        // else {
        //     navigate(routesList.product.url.replace(':productId', productItem._id))
        // }
        navigate(routesList.product.url.replace(':productId', productItem._id))

    }

    return (
        <div className='text-gray-700 cursor-pointer'>
            <div className='cardLink' onClick={clickHandler}>
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
            </div>
        </div>
    )
}

export default ProductCard;