import React from 'react';
import starIcon from "../../assets/icons/iconPics/star.jpg";


function ProductInfo({ currencies, productData }) {
    return (
        <>
            <h1 className='font-medium text-2xl mt-2 productInfo_title' data-testid='productName'>
                { productData.name }
            </h1>
            <div className='flex items-center gap-1 mt-2 productInfo_title'>
                {
                Array.from({ length: productData.stars }).map((star, index) => (
                    <img key={index} src={starIcon} className='w-3.5' />
                ))
                }
            </div>
            <p className='mt-5 text-3xl font-medium productInfo_title'>
                { currencies.uk.sign } { productData.price }
            </p>
            <p className='mt-5 text-gray-500 md:w-4/5'>
                { productData.description }
            </p>
        </>
    )
}

export default ProductInfo