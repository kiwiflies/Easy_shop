import React, { useEffect, useState } from "react";
import classes from './styles.module.scss';
import { useDispatch, useSelector } from "react-redux";
import { API } from "../redux/product/API";
import NavLink from "../NavLink/NavLink";


function CategoryMenu() {

  const dispatch = useDispatch();
  const { productCategoryData } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(API.getProductCategory());
  }, [dispatch]);
  const mouseHover = (bool,e) => {
    e.stopPropagation()
    setOpen(bool)
  }
  const dispatchTitle = (item) => dispatch(changeTitle(item))

  return (
   <div className={classes.category_menu}>
              <div className={classes.category_menu_top}>
                <NavLink onClick={() => dispatchTitle('New arrivals')} href='/productCategory'>New arrivals</NavLink>
                <NavLink onClick={() => dispatchTitle('Bestsellers')} href="/productCategory">Bestsellers</NavLink>
                <NavLink onClick={() => dispatchTitle('Sales')} href="/productCategory">Sales</NavLink>
                <NavLink onClick={() => dispatchTitle('Giftcards')} href="/productCategory">Giftcards</NavLink>
              </div>
              <div className="flex column">
                <div></div>
                <div></div>
              </div>
              <div className="flex column">
                <ul className={classes.menu_categories}>
                  {productCategoryData.map((item) => {
                    if(item.parent_id === 4 || item.id === 4) {
                      return <li key={item.id} onClick={() => dispatchTitle(item.translation.title)}>{item.translation.title}</li>
                    }
                    }) }
                </ul>
              </div>
              <div className="flex column">
                <ul className={classes.menu_categories}>
                  {productCategoryData.map((item) => {
                    if(item.parent_id === 23 || item.id === 23) {
                      return <li key={item.id} onClick={() => dispatchTitle(item.translation.title)}>{item.translation.title}</li>
                    }
                    }) }
                </ul>
              </div>
   </div>
  )
}
export default CategoryMenu
