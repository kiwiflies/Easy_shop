import classes from "./styles.module.scss";
import ButtonWhite from "../../Buttons/ButtonWhite/ButtonWhite";
import ButtonLike from "../../Buttons/ButtonLike/ButtonLike";
import Link from 'next/link';
import { useTranslation } from "react-i18next";



function ProductThird({
  product_name,
  product_category,
  productType,
  sale_number,
  price,
  sale_price,
  colors,
  item_img
}) {
  const sale = productType === "sale";
  const new_product = productType === "new_product";
  const {t} = useTranslation();

  return (
    <div className={classes.product_card}>
      <div className={classes.product_pic}>
        <img src={item_img}/>
        <div className={classes.product_like}>
          <ButtonLike />
        </div>
      </div>
      <div className={classes.product_category}>
        {product_category}
      </div>
      <div className='i-flex between'>
        <div className='d-flex column'>
          <div className={classes.product_name}>
            <Link href="/product">
              {product_name}
            </Link>
          </div>
          <div className={classes.product_colors}>
            {colors?.map((item) => (
              <div key={item.id} style={{background: item, border: item === "#ffffff" ? "1px solid #00000070" : "0"}} />
            ))}
          </div>
        </div>
        <div className={classes.price_part}>
            {!sale && 
              <div className={classes.product_price}>
                {price}
              </div>}
            {sale && (
              <div className={classes.product_sale_price}>
                <span>{price}</span>
                <span>{sale_price}</span>
              </div>
            )}
        </div>
      </div>
      <div className={classes.product_card_bottom}>
        <ButtonWhite text={t("add_card")} />
      </div>
      <div className={classes.sale_new}>
        {new_product && (
          <div className={classes.product_new}>
            <div />
            <span>{t("new_card_short")}</span>
          </div>
        )}
        {sale && (
          <div className={classes.product_sale}>
            <div />
            <span>{t("sale_card")}</span>
            <span>{sale_number}</span>
          </div>
        )}
      </div>
    </div>
  );
}
export default ProductThird;
