import React from 'react'; 
import classes from './styles.module.scss';
import { FacebookShare, InstagramShare, PinterestShare, HeartSec, TwitterShare, ShareIcon } from '../../Icons';
import { useState } from "react";
import ButtonBlack from "../../Buttons/ButtonBlack/ButtonBlack";
import Arrow from '../../../public/image/lang_arrow.svg';

function ProductDescriptionSec({data}) {
    const sizeProduct = ["XXS","M","L"]
    const itemSize = "XXS";
    const color1 = "#B9B9D4";
    const quantity = [];
    
      const [isOpen, setIsOpen] = useState(false);
      const [selectedOption, setSelectedOption] = useState('Choose your size');
    
      const toggling = () => {
        setIsOpen(!isOpen);
      }
    
      const onOptionClicked = value => () => {
        setSelectedOption(value);
        setIsOpen(false);
      };

   return (
    <>
        <div className={classes.productpage_descrip}>
            <div>{data.description}</div>
            <div className='flex between'>
                <div className={classes.productpage_color_size}>
                    <div className='flex a-center'>
                        <div>Color</div>
                        <span className={classes.productpage_colors}>
                            {data.color.map((item, id) => {
                                if (color1 === item){
                                        return (
                                <div key={id} className={classes.productpage_color_circle} 
                                style={{background: `${item}`, outline:"2px solid #00000090"}}/>)}
                                else {
                                    return (
                                        <div key={id} className={classes.productpage_color_circle} 
                                        style={{background: `${item}`}}/>)
                                }
                            })}
                        </span>
                    </div>
                    <div className={classes.size_part}>
                        <div>Size</div>
                        <div className={classes.size_dropdown}>
                            <div onClick={toggling} className={classes.drop_header}>
                                <div>
                                    {selectedOption}
                                </div>
                                <div id="arrow" 
                                        className={classes.arrow} 
                                        style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}>
                                            <Arrow/>
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
                    <div className={classes.productpage_buttons}>
                        <ButtonBlack text="Add to cart"/>
                        <button className={classes.productpage_buttonlike}><span>Add to favourites</span> <HeartSec/></button>
                    </div>
                </div>
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
            </div>
        </div>
    </>
   )
 }
 export default ProductDescriptionSec