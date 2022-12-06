import React from 'react';
import ButtonWhite from '../Buttons/ButtonWhite/ButtonWhite';
import classes from './styles.module.scss';

const data = {
    img: "/image/sales_img.jpg",
    title: "End of seazon sale",
    category: [
        "man",
        "woman",
        "kid",
    ]
};

function SalesAdd() {
  return (
   <div className={classes.sales_add_main}>
       <img src={data.img}/>
        <div className={classes.add_title}>{data.title}</div>
        <div className={classes.add_buttons}>
                {data.category.map((item, index) => (
                    <div key={index}>
                        <ButtonWhite text={item}/>
                    </div>
                ))}
        </div>
   </div>
  )
}
export default SalesAdd
