import React from 'react';
import ProductPageMain from '../components/ProductPagesContent/ProductPageMain/ProductPageMain';
import ProductPageSec from '../components/ProductPagesContent/ProductPageSec/ProductPageSec';
import ProductPageThird from '../components/ProductPagesContent/ProductPageThird/ProductPageThird';
import MainLayout from '../layouts/MainLayout';
import SwitchComponentsHOC from "../HOC/SwitchComponentsHOC/SwitchComponentsHOC";

 
function Product() {
   return (
    <MainLayout pagetitle='Product'>
      <SwitchComponentsHOC
        list={[
          { SliderMain: <ProductPageMain /> },
          { SliderSec: <ProductPageSec /> },
          { SliderThird: <ProductPageThird /> },
        ]}
      />
    </MainLayout>
   )
 }
 export default Product