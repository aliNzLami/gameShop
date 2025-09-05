import React, { useContext, useState, useEffect } from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ShopContext } from "../assets/context/ShopContext"
import ProductCard from './Collection/ProductCard';


function CustomeCarousel({list, className = ""}) {

    const shopData = useContext(ShopContext) || {};
    
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <Carousel responsive={responsive}>
            {
                list && list.length
                ?
                list.map((item) => 
                    <div className={`mx-3 ${className}`} key={item._id}>
                        <ProductCard productItem={item} currencies={shopData.currencies} />
                    </div>
                )
                :
                <></>
            }
        </Carousel>
    )
}

export default CustomeCarousel