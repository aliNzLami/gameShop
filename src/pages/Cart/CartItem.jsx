import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router';

// helper
import { numberValidity } from '../../assets/helper/numberValidity';

// context
import { RouteContext } from '../../assets/context/RouteContext';
import { InCartContext } from '../../assets/context/InCartContext';
import { ShopContext } from '../../assets/context/ShopContext';

// icon
import trash from "../../assets/icons/iconPics/trash.png";
import Modal from '../../components/Modal';

// component
import { toast } from 'react-toastify';



function CartItem( { item, index, setIsValid } ) {

    // ----------------------------------- Context ----------------------------------- //
    const routesList = useContext(RouteContext) || {};
    const { currencies } = useContext(ShopContext) || {};
    const { inCartItems, updateInCart } = useContext(InCartContext) || {};

    // ----------------------------------- State ----------------------------------- //
    const [modal, setModal] = useState(false);

    // ----------------------------------- Function ----------------------------------- //

    const removeHandler = () => {
        setModal(false);
        const newList = [...inCartItems];
        newList.splice(index, 1);
        updateInCart(newList);
        toast.info(`${item.product.name} (${item.platform.name}) has been removed.`);
    }

    const changeNumber = (input) => {
        const isValid = numberValidity(input, item.product.availabe);
        if(!isValid.status) {
            toast.error(isValid.text);
        }
        else {
            updateNumbers(Number(input));
        }
        setIsValid(isValid.status);
    }

    const updateNumbers = (input) => {
        if(inCartItems.length) {
            const newList = [...inCartItems];
            newList[index].number = input;
            updateInCart(newList);
        }
    }

    // ----------------------------------- Effects ----------------------------------- //
    useEffect(() => {
        changeNumber(item.number)
    }, [])
    


    return (
        <>
            <Modal isOpen={modal} onClose={() => setModal(false)}>
                <p className='mt-5 text-center'>
                    <span>
                        {`Do you want to delete `}
                    </span>
                    <span className='font-bold'>
                        {`${item?.product?.name??""} (${item?.platform?.name??"" }) ?`}
                    </span>
                </p>
                <div className='flex justify-center mt-10'>
                    <button onClick={removeHandler} className='mainPurpleBg text-white px-4 py-2 rounded cursor-pointer'>
                        DELETE
                    </button>
                </div>
            </Modal>
        
            <div className='mt-5 px-4 py-4 mainBorder text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 cartItem_mobile CartItemForTest shadow-lg'>
                <div className="flex items-start gap-6 cartItem_imgTitle_mobile">
                    <div className='cartItem_imgHolder_mobile'>
                        <Link className='imgRatio' to={routesList.product.url.replace(':productId', item?.product?._id??"")}>
                            {
                                item?.product?.pic &&
                                <img className='sm:w-20' src={item.product.pic} />
                            }
                        </Link>
                    </div>
                    <div className='cartItem_infoHolder_mobile'>
                    <Link to={routesList.product.url.replace(':productId', item?.product?._id??"")}>
                        <p className='text-18 sm:text-lg font-medium'>
                                { item?.product?.name??"" }
                        </p>
                    </Link>
                        <div className='cartItem_infoBoxHolder_mobile flex items-center gap-5 mt-4'>
                            <p className='font-bold cartItem_price_mobile text-18'>
                                {`${currencies.uk.sign} ${item?.product?.price??""}`}
                            </p>
                            <p className='px-2 sm:px-3 sm:py-2 mainBorder bg-slate-50 flex cartItem_platformBox_mobile text-16'>
                                <span>
                                    { item?.platform?.name??"" }
                                </span>
                                {
                                    item?.platform?.icon &&
                                    <img className='platformCard ms-3' src={item.platform.icon} />
                                }
                            </p>
                        </div>
                    </div>
                </div>
                <input onChange={(e) => changeNumber(e.target.value)} className='mainBorder cartItem_input_mobile md:max-w-20 px-1 sm:px-2 py-1' type="number" defaultValue={item?.number??""} />
                <img  onClick={() => setModal(true)} className='cartItem_removeBtn_mobile w-4 mr-4 sm:w-5 cursor-pointer' src={trash} />
            </div>
        </>
        
    )
}

export default CartItem