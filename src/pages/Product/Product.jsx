import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from "../../assets/context/ShopContext";

// components
import Loading from "../../components/Loading";
import Container from "../../components/Container";
import ProductPlatorm from './ProductPlatorm';
import ProductInfo from './ProductInfo';
import AddToCartProduct from './AddToCartProduct';
import ProductReviews from './ProductReviews';
import RelatedProducts from './RelatedProducts';

function Product() {

  const { productId } = useParams();

  // -------------------------- Context -------------------------- //
  const { products, currencies } = useContext(ShopContext) || {};

  // -------------------------- State -------------------------- //
  const [selectedProduct, setSelectedProduct] = useState({
    productData: null,
    platforms: null,
    selectedPLatforms: [],
    itemNumber: 0
  })

  // -------------------------- State -------------------------- //
  const fetchProductData = async () => {
    const newSelected = {...selectedProduct};
    setTimeout(() => {
      for(let item of products) {
        if(item._id == productId) {
          newSelected.productData = item;
          setSelectedProduct({...newSelected})
          return;
        }
      }
    }, 1000);
  }

  // -------------------------- Effects -------------------------- //
  useEffect(() => {
    if(products) {
      fetchProductData();
    }
  }, [])

  return (
    <>
      {
        selectedProduct.productData
        ?
          <>
            <Container>
              <div className='productBox pt-10 transition-opacity ease-in ducration-500 opacity-100 flex'>
                <div className='productBox_imgBox imgRatio'>
                  <div>
                    <img className='w-full h-auto' src={selectedProduct.productData.pic} />
                  </div>
                </div>

                <div className="flex-1 productBox_DataBox">
                  <ProductInfo currencies={currencies} productData={selectedProduct.productData} />
                  <ProductPlatorm selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                  <AddToCartProduct selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />
                </div>

              </div>
              <ProductReviews selectedProduct={selectedProduct} />
              
              <RelatedProducts selectedProduct={selectedProduct} />
              
            </Container>
            <div className='w-full footerLine mt-25' />
          </>
        :
          <div className='flex justify-center items-center minH500'>
            <Loading />
          </div>
      }
    </>
  )
}

export default Product