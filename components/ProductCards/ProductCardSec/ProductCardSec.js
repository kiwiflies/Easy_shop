import classes from './styles.module.scss';
import ButtonWhite from '../../Buttons/ButtonWhite/ButtonWhite';
import ButtonLike from '../../Buttons/ButtonLike/ButtonLike';
import Link from 'next/link';


function ProductSec ({product_name, productType, price, sale_price, item_img, viewed_product,}) {
    const sale = productType === "sale";
    const new_product = productType === "new_product";
  return (
    <div className={classes.product_card}>
        <div className={classes.product_pic} style={{ height: new_product || sale || viewed_product ? "260px" : "", width: new_product || sale || viewed_product ? "initial" : "" }}>
            <img src={item_img}/>
                {new_product && <div className={classes.product_new}>
                    New arrival
                </div>}
                {sale && <div className={classes.product_sale}>
                    Sale
                </div>}
                <a href="#" className={classes.add_to_card}>
                    Add to card
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
            Add to favourites
        </button>
    </div>
  )
}
export default ProductSec