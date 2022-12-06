import classes from "./styles.module.scss";
import { HeartIcon, AccountIcon, ShopbagIcon, SitemapIcon } from "../Icons";
import NavLink from "../NavLink/NavLink";
import { storage } from "../../helpers/storage";
import { useEffect, useState } from "react";

function MenuIcons() {
  const [state,setState] = useState(null)
  useEffect(() => {
    setState(localStorage.getItem("user"))
  }, [])
  return (
    <div className={classes.menu_icons}>
      {state ? (
        <NavLink href="account">
          <span className={classes.my_acc}>My account</span>
        </NavLink>
      ) : (
        <NavLink href="login">
          <span className="flex column a-center">
              <AccountIcon />
          </span>
        </NavLink>
      )}
      <a href="#" target="_blank" rel="noreferrer">
        <span className="flex column a-center">
            <HeartIcon />
        </span>
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <span className="flex column a-center">
            <ShopbagIcon />
        </span>
      </a>
    </div>
  );
}
export default MenuIcons;
