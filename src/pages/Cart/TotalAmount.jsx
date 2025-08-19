import React, { useContext, useState, useEffect } from 'react'

// context
import { ShopContext } from '../../assets/context/ShopContext';
import { InCartContext } from '../../assets/context/InCartContext';

// component
import Title from '../../components/Collection/Title';


function TotalAmount( { navigateTitle, isValid, onClickBtn = () => {} } ) {


    // ----------------------------------- Context ----------------------------------- //
    const { currencies, delivery_fee } = useContext(ShopContext) || {};
    const { inCartItems } = useContext(InCartContext) || {};


    // ----------------------------------- State ----------------------------------- //
    const [total, setTotal] = useState(0);

    const content = [
        {
           name: "Subtotal",
           quantity:  total,
        },
        {
            name: "Shipping Fee",
            quantity:  delivery_fee,
         },
         {
            name: "Total",
            quantity:  total + delivery_fee,
         },
    ]

    // ----------------------------------- Function ----------------------------------- //
    const calculateTotal = () => {
        if(inCartItems && inCartItems.length) {
            let sum = 0;
            for(let item of inCartItems) {
                sum += Number(item.number) * Number(item.product.price)
            }
            setTotal(sum);
        }
    }

    // ----------------------------------- Effect ----------------------------------- //
    useEffect(() => {
        calculateTotal();
    }, [inCartItems])
    
    
    return (
        <div className='w-full'>
            <div className="text-2xl">
                <Title text1='CART' text2='TOTALS' />
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm">
                {
                    content.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className="flex justify-between text-18">
                                    <p className={`${item.name === "Total" && "font-bold"}`}>
                                        { item.name }
                                    </p>
                                    <p className={`${item.name === "Total" && "font-bold"}`}>
                                        {
                                            inCartItems && inCartItems.length
                                            ?
                                                `${currencies.uk.sign} ${item.quantity}`
                                            :
                                                0
                                        }
                                    </p>
                                </div>
                                {
                                    index !== content.length -1 
                                    &&
                                    <hr />
                                }
                            </div>
                        )
                    })
                }
            </div>

            {
                inCartItems && inCartItems.length
                ?
                    <div className="w-full text-end">
                        <button 
                            onClick={onClickBtn} 
                            className={`py-3 px-8 my-8 text-sm text-white cursor-pointer mainPurpleBg text-16 ${isValid ? "" : "opacity-[0.5]"}`}
                            data-testid='proceedBtn'
                            disabled={!isValid}
                        >
                            { navigateTitle }
                        </button>
                    </div>
                :
                    ""
            }
        </div>
    )
}

export default TotalAmount