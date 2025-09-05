import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from "../../assets/context/ShopContext"
import ProductCard from "./ProductCard"
import HeaderCollection from './HeaderCollection';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from '../Loading';

function CustomCollection({ 
    text1, 
    text2, 
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod perferendis", 
    productList, 
    marginTop = true,
    infinityScroll = false 
}) 

{
    // ---------------------------------------------- Context
    const shopData = useContext(ShopContext);

    // ---------------------------------------------- States
    const [infinityScrollList, setInfinityScrollList] = useState({ number: 0, list: [] });


    // ---------------------------------------------- Functions
    const goNextScroll = () => {
        if(!infinityScrollList.number) return

        if( productList.length - infinityScrollList.list.length >= 20 ) {
            setInfinityScrollList(prev => ({
                ...prev,
                number: infinityScrollList.number + 20,
                list: [...productList.slice(0, infinityScrollList.number + 20)]
            }))
        }
        else {
            setInfinityScrollList(prev => ({
                ...prev,
                number: NaN,
                list: [...productList]
            }))
        }
    }

    // ---------------------------------------------- Effects
    useEffect(() => {
        const initialNumber = productList.length >= 20 ? 20 : productList.length;
        setInfinityScrollList({
            number: initialNumber,
            list: [...productList.slice(0, initialNumber)]
        });
    }, [productList])
    
    return (
        <div className={`collectionHolder ${marginTop && 'mt-20'}`}>
            <HeaderCollection
                text1={text1} 
                text2={text2}
                description={description}
            />
                {
                    infinityScroll
                    ?
                        <div data-testid='productsHolder'>
                            <InfiniteScroll
                                dataLength={infinityScrollList.list.length}
                                next={goNextScroll}
                                hasMore={infinityScrollList.number < productList.length}
                                loader={<Loading />}
                            >
                                {
                                    infinityScrollList.list.length &&
                                    infinityScrollList.list.map((item) => 
                                        <div key={item._id}>
                                            <ProductCard productItem={item} currencies={shopData.currencies} />
                                        </div>
                                    )
                                }
                            </InfiniteScroll>
                        </div>

                    :
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6" data-testid='productsHolder'>
                            {
                                productList.length &&
                                productList.map((item) => 
                                    <div key={item._id}>
                                        <ProductCard productItem={item} currencies={shopData.currencies} />
                                    </div>
                                )
                            }
                        </div>
                }
        </div>
    )
}

export default CustomCollection