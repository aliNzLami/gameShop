import React, { useContext, useState, useEffect, useRef } from "react";

// gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShopContext } from "../../assets/context/ShopContext";

// components
import HeaderCollection from "../../components/Collection/HeaderCollection";
import ProductCard from "../../components/Collection/ProductCard";

function LatestCollection() {

  // ----------------------- CONTEXT ----------------------- //
  const shopData = useContext(ShopContext) || {};

  // ----------------------- STATES ----------------------- //
  const [latestProduct, setLatestProduct] = useState([]);

  // ----------------------- REFS ----------------------- //
  const cardsContainer = useRef(null);
  const scrollSection = useRef(null);

  // ----------------------- FUNCTIONS ----------------------- //
  const prepareScrolling = () => {
    const cards = gsap.utils.toArray(".latestProducts_card");
    const sectionWidth = scrollSection.current.clientWidth;
    const lastCard = cardsContainer.current.lastElementChild;
    const lastRight = lastCard.offsetLeft + lastCard.offsetWidth ;
    const totalScroll = lastRight - sectionWidth;
    
    const scrollTrack = gsap.to(cardsContainer.current, {
      x: -totalScroll,
      ease: "none",
      scrollTrigger: {
        trigger: scrollSection.current,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        scrub: true,
        anticipatePin: 1,
      },
    });
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0.2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "left 95%",
            end: "center 90%",
            scrub: true,
            containerAnimation: scrollTrack,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }

  // ----------------------- EFFECTS ----------------------- //
  useEffect(() => {
    if (shopData.products) setLatestProduct(shopData.products.slice(0, 15));
  }, [shopData.products]);

  useEffect(() => {
    if (!latestProduct.length) return;
    gsap.registerPlugin(ScrollTrigger);
    prepareScrolling()
  }, [latestProduct]);

  return (
    <section className="mt-10">
      <div className="latestProducts_scrolling pt-15" ref={scrollSection}>
      <HeaderCollection text1={"LATEST"} text2={"COLLECTIONS"} />
        <div className="latestProducts_cardsContainer" ref={cardsContainer}>
          {latestProduct.map((item) => (
            <div className="latestProducts_card" key={item._id}>
              <ProductCard
                productItem={item}
                currencies={shopData.currencies}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LatestCollection;