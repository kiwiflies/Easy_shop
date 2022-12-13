import React from 'react';
import { useRouter } from 'next/router'
import ProductPageMain from '../../components/ProductPagesContent/ProductPageMain/ProductPageMain';
import ProductPageSec from '../../components/ProductPagesContent/ProductPageSec/ProductPageSec';
import ProductPageThird from '../../components/ProductPagesContent/ProductPageThird/ProductPageThird';
import MainLayout from '../../layouts/MainLayout';
import SwitchComponentsHOC from "../../HOC/SwitchComponentsHOC/SwitchComponentsHOC";
import getCategories from '../api/getCategories';

function Product({categories}) {
  const {query} = useRouter();

   return (
    <MainLayout pagetitle='Product' categories={categories}>
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

//  export async function getServerSideProps() {
//    const categories = await getCategories();
 
//    return { props: { categories } };
//  }

 export default Product