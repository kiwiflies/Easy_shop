import React from 'react'; 
import classes from './styles.module.scss';
import { FacebookShare, InstagramShare, PinterestShare, StarBlueIcon, StarWhiteIcon, TwitterShare } from '../../Icons';
import { useState, useEffect } from "react";
import CustomDropdown from '../../CustomDropdown/CustomDropdown';
import ButtonWhite from "../../Buttons/ButtonWhite/ButtonWhite";
import ButtonLike from "../../Buttons/ButtonLike/ButtonLike";
import CustomAccordion from '../../CustomAccordion/CustomAccordion';


function ProductDescriptionMain({data}) {
    const sizeProduct = ["XXS","M","L"]
    const itemSize = "XXS";
    const color1 = "#B9B9D4";
    const quantity = [];
    const [blue, setGrey] = useState([]);
    const [white, setWhite] = useState([]);
    

    useEffect(() => {
      data.rate && setGrey(Array.from(Array(data.rate).keys()));
      data.rate && setWhite(Array.from(Array(5 - data.rate).keys()));
    }, [data.rate]);
   return (
    <>
        <div className='flex between'>
                    <div className='flex column'>
                        <div className={classes.productpage_code}>
                            {data.itemCode}
                        </div>
                        <div className={classes.productpage_title}>
                            {data.itemTitle}
                        </div>
                        <div className={classes.productpage_rate}>
                            {blue.map((item, id) => {
                                return (
                                <div key={id}>
                                    <StarBlueIcon/>
                                </div>);
                            })}

                            {white.map((item, id) => {
                                return (
                                <div key={id} className={classes.grey_star}>
                                    <StarWhiteIcon/>
                                </div>);
                            })}
                            <div className={classes.productpage_buyed}>
                                ({data.itemBuyed})
                            </div>
                        </div>
                    </div>
                    <div className='flex column align-end'>
                    {data.sale ? (<>
                            <div className={classes.product_sale_price}>
                                <span>{data.price}</span>
                                <span>{data.sale.salePrice}</span>
                            </div>
                            <div className={classes.productpage_sale}>
                                (-{data.saleNumber}%)
                            </div>
                            </>) : (
                            <div className={classes.product_price}>{data.price}</div>
                            )}
                        
                    </div>
                </div>
                <div className='flex column'>
                    <form>
                        <div className={classes.productpage_color_name}>
                            <span className={classes.productpage_grey_text}>
                                Color: 
                            </span>
                            <span>
                                {data.colorName}
                            </span>
                        </div>
                        <div className={classes.productpage_colors}>
                            {data.color.map((item, id) => {
                                if (color1 === item){
                                        return (
                                <div key={id} className={classes.productpage_color_circle} 
                                style={{background: `${item}`, outline:"2px solid #06113C"}}/>)}
                                else {
                                    return (
                                        <div key={id} className={classes.productpage_color_circle} 
                                        style={{background: `${item}`}}/>)
                                }
                            })}
                        </div>
                        <div className='flex column'>
                            <div className={classes.productpage_grey_text}>Size:</div>
                            <div className={classes.productpage_sizes}>
                                {data.size.map((item, id) => {
                                    if (itemSize === item){
                                        return (
                                            <div key={id} className={classes.productpage_size_single_choosed}>
                                                {item}
                                            </div>)}
                                    for(let i=0; i<sizeProduct.length; i++) {
                                        if (sizeProduct[i]==item) {
                                            return (
                                                <div key={id} className={classes.productpage_size_single}>
                                                    {item}
                                                </div>)}} 
                                    for(let i=0; i<sizeProduct.length; i++) {
                                        if (sizeProduct[i] != item) {
                                        return (
                                            <div key={id} className={classes.productpage_size_none}>
                                                {item}
                                            </div>)}}
                                    })}
                            </div>
                        </div>
                        <div className={classes.productpage_quantity}>
                            <CustomDropdown options={data.quantity} className={classes.quantity}/>
                        </div>
                        <div className={classes.productpage_add_like}>
                            <ButtonWhite text="ADD TO BAG" type="submit"/>
                            <ButtonLike/>
                        </div>
                    </form>
                    <div className={classes.productpage_description}>
                        <CustomAccordion header="DESCRIPTION">
                            {data.description}
                        </CustomAccordion>
                        <CustomAccordion header="SHIPPING & RETURNS">
                            {data.shipping}
                        </CustomAccordion>
                    </div>
                    <div className={classes.productpage_share}>
                        <div>Share</div>
                        <div className='flex'>
                            <a target='_blank' rel="noreferrer" href="//pinterest.com/pin/create/link/?url={`https://joheny.com${window.location.pathname}`}">
                                <PinterestShare/>
                            </a>
                            <a target='_blank' rel="noreferrer" href="#">
                                <FacebookShare/>
                            </a>
                            <a target='_blank' rel="noreferrer" href="#">
                                <TwitterShare/>
                            </a>
                            <a target='_blank' rel="noreferrer" href="#">
                                <InstagramShare/>
                            </a>
                        </div>
                    </div>
                </div>
    </>
   )
 }
 export default ProductDescriptionMain