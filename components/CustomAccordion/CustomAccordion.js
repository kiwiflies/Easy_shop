import React, { useState } from 'react';
import classes from './styles.module.scss';

 
function CustomAccordion({className, header, children, changing}) {
    const [isChecked, setIsChecked] = useState(false)
    const [isChanged, setIsChanged] = useState(false)

      const addExpanded = () => {
        setIsChecked(!isChecked)
        changing && setIsChanged(!isChanged)
      }

   return (
    <>
        <div className={className}>
            <div className={`${classes.accordion_item} ${isChecked ? classes.accordion_expanded : ''}`}>
                <div className="flex between" onClick={addExpanded}>
                    <div key={Math.random()} 
                            style={changing ? null : {animation:"none"}} 
                            className={classes.accordion_header}>
                            {isChanged==false ? header : 'Hide'}
                    </div>
                    <i/>
                </div>
                <div className={classes.accordion_content}>{children}</div>
            </div>
        </div>
    </>
   )
 }
 export default CustomAccordion