import React, { useState } from 'react';
import classes from './styles.module.scss';

 
function CustomAccordion({className, header, children, closeState}) {
    const [isChecked, setIsChecked] = useState(false)

      const addExpanded = () => {
        setIsChecked(!isChecked)
        closeState(false)
      }

   return (
    <>
        <div className={className}>
            <div className={`${classes.accordion_item} ${isChecked ? classes.accordion_expanded : ''}`}>
                <div className={classes.accordion_block} onClick={addExpanded}>
                    <div key={Math.random()} 
                            className={classes.accordion_header}>
                            {header}
                    </div>
                </div>
                <div className={classes.accordion_content}>{children}</div>
            </div>
        </div>
    </>
   )
 }
 export default CustomAccordion