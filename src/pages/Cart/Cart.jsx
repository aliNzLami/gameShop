import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

// context
import { InCartContext } from '../../assets/context/InCartContext';
import { RouteContext } from '../../assets/context/RouteContext';
import { ProfileContext } from '../../assets/context/ProfileContext';

// component
import Container from "../../components/Container";
import CartItem from './CartItem';
import TotalAmount from './TotalAmount';
import { toast } from 'react-toastify';

function Cart({productsForTest = null}) {

    const navigate = useNavigate();

    // ---------------------------------- Context ---------------------------------- //
    const { inCartItems } = useContext(InCartContext) || {};
    const { profile } = useContext(ProfileContext) || {};
    const routesList = useContext(RouteContext) || {};

    // ---------------------------------- State ---------------------------------- //
    const [isValid, setIsValid] = useState(false);

    // ---------------------------------- Variables ---------------------------------- //
    const list = productsForTest ? productsForTest : inCartItems;

    // ---------------------------------- Function ---------------------------------- //
    const proceedClick = () => {
        if(profile) {
            navigate(routesList.orders.url);
        }
        else {
            toast.info("First, Login to Your Profile");
            if(routesList) navigate(routesList.login.url);
        }
    }

    return (
        <>
            <Container>
                <div className="cartItemsHolder flex flex-col justify-between">
                    {
                        list && list.length
                        ?
                            list.map((item, index) => {
                                return (
                                    <div key={index}>
                                        <CartItem 
                                            item={item}
                                            index={index}
                                            setIsValid={setIsValid}
                                        />
                                    </div>
                                )
                            })
                        :
                        <div className='flex justify-center font-medium noItemCart'>
                            Your Cart Is Empty
                        </div>
                    }

                    <div className="flex justify-end mt-20 mb-30">
                        <div className="w-full sm:w-[300px]">
                            <TotalAmount 
                                navigateTitle={"PROCEED TO CHECKOUT"}
                                onClickBtn={proceedClick}
                                isValid={isValid}
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Cart