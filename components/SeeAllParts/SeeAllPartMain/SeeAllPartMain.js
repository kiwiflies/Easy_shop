import React from "react";
import NavLink from "../../NavLink/NavLink";
import classes from './styles.module.scss';
import { useTranslation } from "react-i18next";


export default function SeeAllPartMain({ href, title, list, productType, Component }) {

  const {t} = useTranslation();

  return (
    <div className={classes.see_all_part}>
      <div className={classes.see_all_top}>
        <div className={classes.see_all_title}>
          {title}
        </div>
        <NavLink href={href} className={classes.see_all}>
            {t("see_all")}
        </NavLink>
      </div>
      <div className="row">
        {list?.map((item, index) => (
          <div key={index} className="call call-4">
            <Component productType={productType} {...item} />
          </div>
        ))}
      </div>
    </div>
  );
}
