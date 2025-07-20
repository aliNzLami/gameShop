import React, { useContext, useEffect } from 'react';

import { OrdersContext } from '../../assets/context/OrdersContext';
import Container from '../../components/Container';
import Title from '../../components/Collection/Title';
import OrdersCard from './OrdersCard';


function OrdersList() {

    const { updateOrdersList, setLocalOrders, ordersList } = useContext(OrdersContext);
    
    useEffect(() => {
        setLocalOrders();
    }, [])
    
    

    return (
        <>
            <Container>
                <div className="cartItemsHolder flex flex-col justify-between">
                    {
                        ordersList && ordersList.length
                        ?
                            <div>
                                <div className='text-2xl my-10'>
                                    <Title text1='MY' text2='ORDERS' />
                                </div>

                                {
                                    ordersList.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                {
                                                    item.orders.map(order => {
                                                        return (
                                                            <div className='py-4 mainBorder-t mainBorder-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4' key={Math.random()}>
                                                                <OrdersCard
                                                                    personalData={item.personalData}
                                                                    order={order}
                                                                />
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        )
                                    })
                                }
                                <OrdersCard />
                            </div>
                        :
                            <div className='flex justify-center font-medium noItemCart'>
                                Your Orders List Is Empty
                            </div>
                    }
                </div>
            </Container>
        </>
    )
}

export default OrdersList