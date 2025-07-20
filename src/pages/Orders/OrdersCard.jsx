import React, { useContext } from 'react';

import { ShopContext } from '../../assets/context/ShopContext';

function OrdersCard({ order, personalData }) {

    const shopData = useContext(ShopContext);

    return (
      <>
        {
          order &&
          <>
            <div className='flex items-center gap-6 text-sm'>
              <img className='w-30' src={order?.product.pic?? ""} />

              <div className='flex flex-col'>
                <p className='sm:text-base font-bold'> 
                  {order?.product.name?? ""}
                </p>
                <p className='text-lg'>
                  {shopData.currencies.uk.sign} {order?.product.price??""}
                </p>
                <p>
                  <span>
                    { `Reciever: ` }
                  </span>
                  <span className='font-medium'>
                    { personalData?.firstName??"" }
                  </span>
                </p>
                <p>
                  <span>
                    { `Quantity: ` }
                  </span>
                  <span className='font-medium'>
                    { order?.number??"" }
                  </span>
                </p>
                <p className='flex items-center'>
                  <span className='font-medium me-3'>
                    { order?.platform.name??"" }
                  </span>
                  <span className='platformPicOrder'>
                    <img src={order?.platform.icon??""} />
                  </span>
                </p>
              </div>

            </div>

            <div className='md:w-1/2 flex justify-between'>
              <div className="flex items-center gap-2">
                <div className='w-[10px] h-[10px] rounded-full bg-green-500' />
                <p className='text-sm md:text-base'>
                  Ready to ship
                </p>
              </div>
              <button className='mainBorder px-4 py-2 text-sm font-medium rounded-sm cursor-pointer'>
                Track Order
              </button>
            </div>
          </>
        }
      </>
    )
}

export default OrdersCard