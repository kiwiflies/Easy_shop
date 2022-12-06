import React, { useEffect, useState } from "react";
import classes from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../redux/product/API";
import NavLink from "../NavLink/NavLink";

function CategoryMenu() {
  const dispatch = useDispatch();
  const { productCategoryData } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(API.getProductCategory());
  }, [dispatch]);

  const mouseHover = (bool, e) => {
    e.stopPropagation();
    setOpen(bool);
  };

  const dispatchTitle = (item) => dispatch(changeTitle(item));

  return (
    <div className={classes.category_menu}>
      <div className={classes.category_menu_top}>
        <NavLink
          onClick={() => dispatchTitle("New arrivals")}
          href="products/new-arrivals"
        >
          New arrivals
        </NavLink>
        <NavLink
          onClick={() => dispatchTitle("Bestsellers")}
          href="products/bestsellers"
        >
          Bestsellers
        </NavLink>
        <NavLink onClick={() => dispatchTitle("Sales")} href="products/sales">
          Sales
        </NavLink>
        <NavLink
          onClick={() => dispatchTitle("Giftcards")}
          href="products/giftcards"
        >
          Giftcards
        </NavLink>
      </div>
      <div className="flex column">
        <div className={classes.menu_categories_headers}>Shop by Product</div>
        <div>View all</div>
      </div>
      <div className="flex column">
        <ul className={classes.menu_categories}>
          {productCategoryData.map((item) => {
            if (item.parent_id === 4 || item.id === 4) {
              return (
                <li
                  key={item.id}
                  onClick={() => dispatchTitle(item.translation.title)}
                >
                  {item.translation.title}
                </li>
              );
            }
          })}
        </ul>
      </div>
      <div className="flex column">
        <ul className={classes.menu_categories}>
          {productCategoryData.map((item) => {
            if (item.parent_id === 23 || item.id === 23) {
              return (
                <li
                  key={item.id}
                  onClick={() => dispatchTitle(item.translation.title)}
                >
                  {item.translation.title}
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}

export default CategoryMenu;
