import { useRouter } from 'next/router';
import React from 'react'
import CategoryPageContent from '../../components/CategoryPageContent/CategoryPageContent'
import MainLayout from '../../layouts/MainLayout'
import getCategories from '../api/getCategories';

function Products({categories}) {
  const {query} = useRouter();
  console.log(query);

  return (
    <MainLayout pagetitle='Product Category' categories={categories}>
       <CategoryPageContent/>
   </MainLayout>
  )
}

export async function getServerSideProps() {
  const categories = await getCategories();

  return { props: { categories } };
}

export default Products
