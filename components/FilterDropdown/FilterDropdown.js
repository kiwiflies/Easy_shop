import React from 'react'; 
import classes from './styles.module.scss';
import { FacebookShare, InstagramShare, PinterestShare, HeartSec, TwitterShare, ShareIcon } from '../Icons';
import { useState } from "react";
import Arrow from '../../public/image/lang_arrow.svg';

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
        <div className={classes.dropdown}>
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
   )
 }
 export default ProductDescriptionSec