import classes from './styles.module.scss';
import ButtonWhite from '../../Buttons/ButtonWhite/ButtonWhite';
import ButtonLike from '../../Buttons/ButtonLike/ButtonLike';
import Link from 'next/link';
import { useTranslation } from "react-i18next";



function ProductSec ({product_name, productType, price, sale_price, item_img, viewed_product,}) {
    const sale = productType === "sale";
    const new_product = productType === "new_product";
    const {t} = useTranslation();

  return (
    <div className={classes.product_card}>
        <div className={classes.product_pic} style={{ height: new_product || sale || viewed_product ? "260px" : "", width: new_product || sale || viewed_product ? "initial" : "" }}>
            <img src={item_img}/>
                {new_product && <div className={classes.product_new}>
                    {t("new_card")}
                </div>}
                {sale && <div className={classes.product_sale}>
                    {t("sale_card")}
                </div>}
                <a href="#" className={classes.add_to_card}>
                    {t("add_card")}
                </a>
        </div>
        <div className={classes.product_name}>
            <Link href="/product">
                {product_name}
            </Link>
        </div>
        <div className={classes.product_price} style={sale?{display:"none"}:null || viewed_product?{fontSize:"16px", marginTop: "26px"}:null}>
            {price}
        </div>
        {sale && <div className={classes.product_sale_price}>
            <span>{price}</span>
            <span>{sale_price}</span>
        </div>}
        <button className={classes.product_like}>
            {t("fav_card")}
        </button>
    </div>
  )
}
export default ProductSec