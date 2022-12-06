import classes from "./styles.module.scss";
import ButtonWhite from "../../Buttons/ButtonWhite/ButtonWhite";
import ButtonLike from "../../Buttons/ButtonLike/ButtonLike";
import { SmallGreyStar, SmallGreyStarStroke } from '../../Icons';
import { useState, useEffect } from "react";
import Link from 'next/link';
import Rating from "../../Rating/Rating";


function ProductMain({
  product_name,
  productType,
  sale_number,
  price,
  sale_price,
  rate,
  item_img,
  viewed_product,
  product_id = 3
}) {
    const sale = productType === "sale";
    const new_product = productType === "new_product";
    
  return (
    <div className={classes.product_card}>
      {new_product && <div className={classes.product_new}>New</div>}
      {sale && (
        <div className={classes.product_sale}>
          <span>Sale</span>
          <span>|</span>
          <span>{sale_number}</span>
        </div>
      )}
      <div
        className={classes.product_pic}
        style={{ height: new_product || sale ? "300px" : viewed_product ? "334px" : null }}
      >
        <img src={item_img}/>
      </div>
      <div className={classes.product_name}>
      <Link href={`/products/${product_id}`}>
          {product_name}
        </Link>
      </div>
      {sale ? (
        <div className={classes.product_sale_price}>
          <span>{price}</span>
          <span>{sale_price}</span>
        </div>
      ) : (
        <div className={classes.product_price}>{price}</div>
      )}
      <div className={classes.boxstars}>
          <Rating rate={rate} fontSize="11px"/>
      </div>
      <div className={classes.product_bottom} 
      style={{marginTop: viewed_product && new_product ? "38px" : viewed_product && !sale && !new_product? "38px" : null}}>
        <ButtonWhite text="ADD TO CART" />
        <ButtonLike />
      </div>
    </div>
  );
}
export default ProductMain;
