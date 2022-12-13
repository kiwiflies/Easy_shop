import React, { useState } from "react";
import PropTypes from "prop-types";
import NavLink from "../NavLink/NavLink";
import classes from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle1, changeTitle2 } from "../redux/product/slice";
import { useTranslation } from "react-i18next";



function MenuLinks({ categories, secondary }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { productCategoryData } = useSelector((state) => state.product);
  // const menuList = categories || productCategoryData;
  const menuList = productCategoryData;
  
  const mouseHover = (bool, e) => {
    e.stopPropagation();
    setOpen(bool);
  };
  const dispatchTitle1 = (item) => dispatch(changeTitle1(item));
  const dispatchTitle2 = (item) => dispatch(changeTitle2(item));

  const {t} = useTranslation();

  return (
    <React.Fragment>
     <div className={classes.menu_drop}>
      <div className={classes.menulinks}>
        {menuList?.map(
          (item, index) =>
            !item.parent_id && (
              <NavLink
                key={index}
                href={`products?type=${item.code}`}
                className={classes.navlink}
                onMouseOver={(e) => mouseHover(true, e)}
                onMouseLeave={(e) => mouseHover(null, e)}
                onClick={() => {
                  setOpen(false);
                  dispatchTitle1(item.translation?.title);
                }}
              >
                {item.translation?.title}
              </NavLink>
            )
        )}
        {secondary && (
          <>
            <NavLink
              href="products"
              className={classes.navlink_sale}
              onClick={() => dispatchTitle1("Sale")}
            >
              {t("sale")}
            </NavLink>
            <NavLink
              href="products"
              className={classes.navlink}
              onClick={() => dispatchTitle1("New arrivals")}
            >
              {t("new_arrivals")}
            </NavLink>
          </>
        )}
      </div>
      <div
        className={classes.menu_div}
        style={{ display: open ? "flex" : "none" }}
        onMouseLeave={(e) => mouseHover(null, e)}
        onMouseOver={(e) => mouseHover(true, e)}
      >
        <div className={classes.menu_div_inner}>
          <div className={classes.menu_div_categories}>
            <div onClick={() => dispatchTitle2("New arrivals")}>
            {t("new_arrivals")}
            </div>
            <div onClick={() => dispatchTitle2("Bestsellers")}>{t("best_sell")}</div>
            <div onClick={() => dispatchTitle2("Sales")}>{t("sale")}</div>
            <div onClick={() => dispatchTitle2("Giftcards")}>{t("gift_cards")}</div>
          </div>
          <div className="flex column">
            <ul className={classes.menu_categories}>
              {menuList?.map((item, index) => {
                if (item.parent_id === 4 || item.id === 4) {
                  return (
                    <li
                      key={index}
                      onClick={() => dispatchTitle2(item.translation?.title)}
                    >
                      {item.translation?.title}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
          <div className="flex column">
            <ul className={classes.menu_categories}>
              {menuList?.map((item, index) => {
                if (item.parent_id === 23 || item.id === 23) {
                  return (
                    <li
                      key={index}
                      onClick={() => dispatchTitle2(item.translation?.title)}
                    >
                      {item.translation?.title}
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
}
export default MenuLinks;

  MenuLinks.propTypes = {
    categories: PropTypes.array,
    secondary: PropTypes.bool,
  };
