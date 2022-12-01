import Link from "next/link";
import React, { useEffect, useState } from "react";
import classes from "./styles.module.scss";

function Breadcrumbs() {
  const [crumbs, setCrumbs] = useState([]);
  let href = '/'
  useEffect(() => {
    setCrumbs(window.location.pathname.split('/'));
  }, []);

  return (
    <div className={classes.breadcrumbs}>
      {crumbs.map((item, id) => {
        href += '/' + item
        return item.length && isNaN(item/2) ? (
          <Link href={href} passHref key={id}>
            <a className={classes.breadcrumb_single}>{item}</a>
          </Link>
        ) : null;
      })}
    </div>
  );
}
export default Breadcrumbs;
