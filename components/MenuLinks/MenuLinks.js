import React, { useState } from "react";
import PropTypes from "prop-types";
import NavLink from "../NavLink/NavLink";
import classes from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../redux/product/slice";

function MenuLinks({ categories, secondary }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { productCategoryData } = useSelector((state) => state.product);
  const menuList = categories || productCategoryData;

  const mouseHover = (bool, e) => {
    e.stopPropagation();
    setOpen(bool);
  };

  const dispatchTitle = (item) => dispatch(changeTitle(item));

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
                  dispatchTitle(item.translation.title);
                }}
              >
                {item.translation.title}
              </NavLink>
            )
        )}
        {secondary && (
          <>
            <NavLink
              href="products"
              className={classes.navlink_sale}
              onClick={() => dispatchTitle("Sale")}
            >
              Sale
            </NavLink>
            <NavLink
              href="products"
              className={classes.navlink}
              onClick={() => dispatchTitle("New arrivals")}
            >
              New arrivals
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
            <div onClick={() => dispatchTitle("New arrivals")}>
              New arrivals
            </div>
            <div onClick={() => dispatchTitle("Bestsellers")}>Bestsellers</div>
            <div onClick={() => dispatchTitle("Sales")}>Sales</div>
            <div onClick={() => dispatchTitle("Giftcards")}>Giftcards</div>
          </div>
          <div className="flex column">
            <ul className={classes.menu_categories}>
              {menuList?.map((item, index) => {
                if (item.parent_id === 4 || item.id === 4) {
                  return (
                    <li
                      key={index}
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
              {menuList?.map((item, index) => {
                if (item.parent_id === 23 || item.id === 23) {
                  return (
                    <li
                      key={index}
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
