import React, { useState, useEffect } from 'react';

function ProductPlatorm({ selectedProduct, setSelectedProduct }) {

    const prepareList = () => {
        const newSelected = {...selectedProduct};
        const newList = {};
        for(let item of selectedProduct.productData.platforms) {
            newList[item.name] = {...item, selected: false}
        }
        newSelected.platforms = {...newList};
        setSelectedProduct({...newSelected});
    }

    const platformClickHandler = (clickedItem) => {
        const newSelected = {...selectedProduct};
        const selectedPLatforms = [];
        newSelected.platforms[clickedItem].selected = !newSelected.platforms[clickedItem].selected;
        for(let item in newSelected.platforms) {
            if(newSelected.platforms[item].selected) {
                selectedPLatforms.push(newSelected.platforms[item]);
            }
        }
        newSelected.selectedPLatforms = selectedPLatforms;
        setSelectedProduct({...newSelected});
    }

    useEffect(() => {
      prepareList();
    }, [])
    
    return (
        <div className='flex flex-col gap-4 my-8 productInfoBox'>
            <p>
                Select Platform:
            </p>
            <div className='flex-gap-2'>
            {
                selectedProduct.platforms &&
                Object.entries(selectedProduct.platforms).map(platform => {
                    // platform[0] = platform name
                    // platform[1] = platform object
                    
                    return ( 
                        <button 
                            className={`${platform[1].selected ? "platformBtn_selected" : "platformBtn"} me-4 my-2 py-2 px-4 cursor-pointer`} 
                            key={platform[1]._id}
                            onClick={() => platformClickHandler(platform[0])}
                        >
                            { platform[0] }
                        </button>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ProductPlatorm;