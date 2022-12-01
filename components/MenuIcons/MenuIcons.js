import CustomLink from "../CustomLink/CustomLink";
import classes from "./styles.module.scss";
import { HeartIcon, AccountIcon, ShopbagIcon, SitemapIcon } from "../Icons";
import NavLink from "../NavLink/NavLink";

function MenuIcons() {
  return (
    <div className={classes.menu_icons}>
      {typeof window !== "undefined" && !localStorage.getItem("user") ? (
        <NavLink href="/login">
          <div className="flex column a-center">
            <div>
              <AccountIcon />
            </div>
          </div>
        </NavLink>
        ) : (
        <NavLink href="/account">
          <div className={classes.my_acc}>My account</div>
        </NavLink>
      )}
      <a href="#" target="_blank" rel="noreferrer">
        <div className="flex column a-center">
          <div>
            <HeartIcon />
          </div>
        </div>
      </a>
      <a href="#" target="_blank" rel="noreferrer">
        <div className="flex column a-center">
          <div>
            <ShopbagIcon />
          </div>
        </div>
      </a>
    </div>
  );
}
export default MenuIcons;
