import React, { useEffect, useState } from "react";
import classes from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../redux/product/API";
import NavLink from "../NavLink/NavLink";
import { changeTitle1, changeTitle2 } from "../redux/product/slice";
import { useTranslation } from "react-i18next";



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

  const dispatchTitle1 = (item) => dispatch(changeTitle1(item));
  const dispatchTitle2 = (item) => dispatch(changeTitle2(item));

  const {t} = useTranslation();

  return (
    <div className={classes.category_menu}>
      <div className={classes.category_menu_top}>
        <NavLink
          onClick={() => dispatchTitle1("New arrivals")}
          href="products/new-arrivals"
        >
          {t("new_arrivals")}
        </NavLink>
        <NavLink
          onClick={() => dispatchTitle1("Bestsellers")}
          href="products/bestsellers"
        >
          {t("best_sell")}
        </NavLink>
        <NavLink onClick={() => dispatchTitle1("Sales")} href="products/sales">
        {t("sale")}
        </NavLink>
        <NavLink
          onClick={() => dispatchTitle1("Giftcards")}
          href="products/giftcards"
        >
          {t("gift_cards")}
        </NavLink>
      </div>
      <div className="flex column">
        <div className={classes.menu_categories_headers}>{t("by_product")}</div>
        <div>{t("view_all")}</div>
      </div>
      <div className="flex column">
        <ul className={classes.menu_categories}>
          {productCategoryData.map((item) => {
            if (item.parent_id === 4 || item.id === 4) {
              return (
                <li
                  key={item.id}
                  onClick={() => dispatchTitle2(item.translation.title)}
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
                  onClick={() => dispatchTitle2(item.translation.title)}
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
