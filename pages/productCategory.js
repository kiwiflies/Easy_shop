import React from 'react';
import MainLayout from '../layouts/MainLayout';
import CategoryPageContent from '../components/CategoryPageContent/CategoryPageContent';

function ProductCategory() {
  return (
   <MainLayout pagetitle='Product Category'>
       <CategoryPageContent/>
   </MainLayout>
  )
}
export default ProductCategory
