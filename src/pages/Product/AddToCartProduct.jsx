import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from "react-router"

// helper
import { numberValidity } from '../../assets/helper/numberValidity';

// context
import { RouteContext } from '../../assets/context/RouteContext';
import { InCartContext } from '../../assets/context/InCartContext';

// components
import { toast } from 'react-toastify';


function AddToCartProduct({ selectedProduct, setSelectedProduct }) {

    const navigate = useNavigate();

    // ---------------------------------- Context ---------------------------------- //
    const routesList = useContext(RouteContext);
    const { inCartItems, updateInCart, setLocalItems } = useContext(InCartContext);
    
    
    // ---------------------------------- State ---------------------------------- //
    const [showAddToCart, setShowAddToCart] = useState(false);


    // ---------------------------------- Functions ---------------------------------- //
    const checkShowCart = () => {
        if(selectedProduct.platforms === null) {
            setShowAddToCart(false);
            return;
        }

        const platformSelected = [];
        for(let item in selectedProduct.platforms) {
            if(selectedProduct.platforms[item].selected) {
                platformSelected.push(selectedProduct.platforms[item]);
            }
        }
        setShowAddToCart(platformSelected.length)
    }

    const inputOnChange = (e) => {
        const isValid = numberValidity(e.target.value, selectedProduct.productData.availabe);
        const newSelected = {...selectedProduct};
        if(!isValid.status) {
            toast.error(isValid.text);
            newSelected.itemNumber = 0;
            setSelectedProduct({...newSelected});
        }
        else {
            newSelected.itemNumber = Number(e.target.value);
            setSelectedProduct({...newSelected});
        }
    }

    const addToCartHandler = () => {
        if(selectedProduct.itemNumber) {
            updateCartList();
        }
        else {
            toast.error("Tell us how many you want");
            toast.error(`And Enter a Correct Number`);
            return;
        }
    }

    const updateCartList = () => {
        const newInCartItems = [...inCartItems];
        for(let platform of selectedProduct.selectedPLatforms) {
            newInCartItems.push({
                product: selectedProduct.productData,
                number: selectedProduct.itemNumber,
                platform
            })
        }
        updateInCart(newInCartItems);
        setLocalItems();
        doAfterAdd();
    }

    const doAfterAdd = () => {
        if(showAddToCart) {
            toast.success(`${selectedProduct.productData.name} successfully added.`);
            selfDestruction();
            navigate(routesList.cart.url);
        }
    }

    const selfDestruction = () => {
        const newSelected = {
            productData: null,
            platforms: null,
            selectedPLatforms: [],
            itemNumber: 0
        }
        setSelectedProduct({...newSelected});
    }

    // ---------------------------------- Effects ---------------------------------- //
    useEffect(() => {
      checkShowCart();
    }, [selectedProduct])  
    
    return (
        Boolean(showAddToCart) &&
        <div className='addToCartSection'>
            <div>
                <button onClick={addToCartHandler} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700 cursor-pointer">
                    ADD TO CART
                </button>
                <input onChange={inputOnChange} className='itemNumberInput py-2 px-2' placeholder='1' type="number" />
            </div>

            <div className='text-sm text-gray-500 flex flex-col gap-1 smallDescriptionProduct'>
                <p>100% Original product</p>
                <p>Cash on delivery is available on this product</p>
                <p>Easy return and exchange policy within 7 days</p>
            </div>
        </div>
    )
}

export default AddToCartProduct