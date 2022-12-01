import React from 'react'; 
import classes from './styles.module.scss';
import { FacebookShare, InstagramShare, PinterestShare, StarBlueIcon, StarWhiteIcon, TwitterShare, ShareIcon} from '../../Icons';
import { useState, useEffect } from "react";
import ButtonWhite from "../../Buttons/ButtonWhite/ButtonWhite";
import CustomAccordion from '../../CustomAccordion/CustomAccordion';
import DoubleArrow from '../../../public/icons/double_arrow.svg';
import { useDispatch } from 'react-redux';
import { modalClose, modalData, reviewClose, reviewData } from '../../redux/ModalSlice/slice';

function ProductDescriptionThird({data}) {
    const sizeProduct = ["XXS","M","L"]
    const itemSize = "XXS";
    const color1 = "#B9B9D4";
    const quantity = [];
    const [blue, setGrey] = useState([]);
    const [white, setWhite] = useState([]);
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState('Choose your size');
    
      const toggling = () => {
        setIsOpen(!isOpen);
      }
    
      const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
      };
    

    useEffect(() => {
        console.log(data);
        data.reviews.reviewRate && setGrey(Array.from(Array(data.reviews.reviewRate).keys()));
        data.reviews.reviewRate && setWhite(Array.from(Array(5 - data.reviews.reviewRate).keys()));
    }, [data.rate]);
   return (
    <>
        <div className='flex between'>
                    <div className='flex column'>
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
                        <div className={classes.productpage_code}>
                            {data.itemCode}
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
                        <div className={classes.productpage_color_part}>
                            <div className={classes.productpage_colors}>
                                {data.color.map((item, id) => {
                                    if (color1 === item){
                                            return (
                                    <div key={id} className={classes.productpage_color_circle} 
                                    style={{background: `${item}`, outline:"1px solid #000"}}/>)}
                                    else {
                                        return (
                                            <div key={id} className={classes.productpage_color_circle} 
                                            style={{background: `${item}`}}/>)
                                    }
                                })}
                            </div>
                            <div className={classes.productpage_color_name}>
                                <span className={classes.productpage_grey_text}>
                                    Color: 
                                </span>
                                <span>
                                    {data.colorName}
                                </span>
                            </div>
                        </div>
                        <div className='flex column'>
                            <div className={classes.productpage_sizes}>
                            <div className={classes.size_dropdown}>
                            <div onClick={toggling} className={classes.drop_header}>
                                <div>
                                    {selectedOption}
                                </div>
                                <div id="arrow" 
                                        className={classes.arrow} 
                                        style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}>
                                            <DoubleArrow/>
                                </div>
                                </div>
                                {isOpen && (
                                <div className={classes.drop_div}>
                                    <ul className={classes.drop_list}>
                                    {data.size.filter(item => item !== selectedOption)?.map(item => (
                                        <li onClick={onOptionClicked(item)} key={Math.random()} className={classes.drop_list_item}>
                                            {item}
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                                )}
                            </div>
                            </div>
                        </div>
                        <div className={classes.productpage_add_like}>
                            <ButtonWhite text="Add to bag" type="submit"/>
                            <button>Add to favourites</button>
                        </div>
                    </form>
                    <div className={classes.productpage_share}>
                    <a href="#">
                        <ShareIcon/>
                    </a>
                    <a target='_blank' href="//pinterest.com/pin/create/link/?url={`https://joheny.com${window.location.pathname}`}">
                        <PinterestShare/>
                    </a>
                    <a target='_blank' href="#">
                        <FacebookShare/>
                    </a>
                    <a target='_blank' href="#">
                        <TwitterShare/>
                    </a>
                    <a target='_blank' href="#">
                        <InstagramShare/>
                    </a>
                </div>
                <div className={classes.productpage_reviews} onClick={() => {
                    dispatch(reviewData(data))
                    dispatch(reviewClose(true))
                    dispatch(modalData(data))
                }}>
                    Reviews
                </div>
                <div className={classes.productpage_description}>
                    <CustomAccordion header="DESCRIPTION" children={data.description} className={classes.drop}/>
                    <CustomAccordion header="SHIPPING INFO" children={data.shipping} className={classes.drop}/>
                </div>
            </div>
    </>
   )
 }
 export default ProductDescriptionThird