import React, { useContext } from 'react';
import { RouteContext } from '../../assets/context/RouteContext';
import { useLocation, useNavigate } from 'react-router';

function ProductCard({productItem, currencies}) {

    const navigate = useNavigate();
    const location = useLocation();

    const routesList = useContext(RouteContext);


    const clickHandler = () => {
        if(location.pathname.includes("/product")) {
            navigate(routesList.product.url.replace(':productId', productItem._id))
            window.location.reload();
        }
        else {
            navigate(routesList.product.url.replace(':productId', productItem._id))
        }
    }

    return (
        <div className='text-gray-700 cursor-pointer productCard'>
            <div className='cardLink' onClick={clickHandler}>
                <div className="overflow-hidden imgRatio productCard_imgHolder">
                    <div>
                        {
                            productItem?.pic
                            &&
                            <img className='hover:scale-110 transition ease-in-out rounded-2xl' src={productItem.pic} />
                        }
                    </div>
                </div>
                <p className='pt-3 pb-1 text-16 productCardName'>
                    { productItem?.name??"" }
                </p>
                <p className='text-16 font-medium'>
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