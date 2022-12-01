import React, { useEffect, useState } from 'react';
import classes from './styles.module.scss';
import Arrow from '../../public/image/arrow_down.svg';

 
function CustomDropdown({className, options}) {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

  
    const toggling = () => {
      setIsOpen(!isOpen);
    }
  
    const onOptionClicked = value => () => {
      setSelectedOption(value);
      setIsOpen(false);
    };
    
   return (
    <div className={className}>
        <div onClick={toggling} className={classes.drop_header}>
          <div>{selectedOption || options[0]}</div>
          <div id="arrow" className={classes.arrow} style={{transform: isOpen ? 'rotate(180deg)' : 'rotate(0)'}}><Arrow/></div>
        </div>
        {isOpen && (
          <div className={classes.drop_div}>
            <ul className={classes.drop_list}>
              {options.map(option => (
                <li onClick={onOptionClicked(option)} key={Math.random()} className={classes.drop_list_item}>
                  {option}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
   )
 }
 export default CustomDropdown