import React, { useContext, useState, useEffect, useRef } from "react";

// context
import { ShopContext } from "../../assets/context/ShopContext";

// components
import HeaderCollection from "../../components/Collection/HeaderCollection";
import CustomeCarousel from "../../components/CustomeCarousel";

function LatestCollection() {

  // ----------------------- Context ----------------------- //
  const shopData = useContext(ShopContext) || {};


  // ----------------------- States ----------------------- //
  const [latestProduct, setLatestProduct] = useState([]);


  // ----------------------- Ref ----------------------- //
  const cardsContainer = useRef(null);
  const scrollSection = useRef(null);


  // ----------------------- Effects ----------------------- //
  useEffect(() => {
    if (shopData.products) setLatestProduct(shopData.products.slice(0, 15));
  }, [shopData.products]);



  return (
    <section className="mt-10">
      <div className="latestProducts_scrolling pt-15">
        <HeaderCollection text1={"LATEST"} text2={"COLLECTIONS"} />
        <CustomeCarousel
            list={latestProduct}
          />
      </div>
    </section>
  );
}

export default LatestCollection;