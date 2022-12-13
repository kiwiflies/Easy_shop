import classes from "./styles.module.scss";
import { HeartIcon, AccountIcon, ShopbagIcon } from "../Icons";
import NavLink from "../NavLink/NavLink";
import { useEffect, useState, useTransition } from "react";
import { useWindowSize } from "../../helpers/useWindowSize";
import { useTranslation } from "react-i18next";


function MenuIcons() {
  const [state,setState] = useState(null)
  useEffect(() => {
    setState(localStorage.getItem("user"))
  }, []);

  const [width] = useWindowSize();
  const {t} = useTranslation();

  return (
    <div className={classes.menu_icons}>
      {state && width >= 420 ? (
        <NavLink href="account">
          <span className={classes.my_acc}>{t("my_account")}</span>
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
