import React, { useState } from 'react'

function ProductReviews({selectedProduct}) {

    const [active, setActive] = useState("description");

    return (
        <div className='mt-20'>
            <div className="flex">
                <b onClick={() => setActive("description")} className='px-5 py-3 text-18 cursor-pointer descriptionSubBox'>
                    Description
                </b>

                {
                    selectedProduct.reveiws && selectedProduct.reveiws.length && active &&
                    <p onClick={selectedProduct.reveiws && selectedProduct.reveiws.length ? setActive("reviews") : () => {}} className='mainBorder px-5 py-3 text-sm cursor-pointer'>
                        {`Reveiws (${selectedProduct.reveiws && selectedProduct.reveiws.length ? selectedProduct.reveiws.length : "0" })`}
                    </p>
                }
            </div>
            {
                active === "description" &&
                <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 shadow-lg descriptionBox">
                    <p className='text-16'>
                        { selectedProduct.productData.description }
                    </p>
                    <p className='text-16'>
                        {`E-commerce websites typically display products or sevices along with detailed descriptions, images, prices, and any available variantions (e.g. platforms). Each product usually has its own dedicated pagewith relevant information. `}
                    </p>
                </div>
            }
            {
                selectedProduct.reveiws && selectedProduct.reveiws.length && active === "reviews"

            }
        </div>
    )
}

export default ProductReviews