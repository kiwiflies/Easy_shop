import React from 'react';
import classes from './styles.module.scss';
import Title from '../Title/Title';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import SalesAdd from '../Adds/SalesAdd';


function CategoryPageContent() {
  const { title } = useSelector((state) => state.product);

  return (
   <div>
       
       <div className='flex'>
            <div className={classes.category_page_left}>
                <CategoryMenu/>
            </div>
            <div className={classes.category_page_right}>
                <Title text={title}/>
                <div className={classes.category_page_add}>
                    <SalesAdd/>
                </div>
            </div>
       </div>
   </div>
  )
}
export default CategoryPageContent
