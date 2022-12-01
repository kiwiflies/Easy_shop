import React from 'react'
import { StarOutlined, StarFilled } from '../Icons';
import classes from "./styles.module.scss";

const Rating = ({rate, color = "#888", fontSize = 20, className = ""}) => {
  return (
    <div className={`${classes.rate} ${className}`} style={{ color, fontSize }}>
      <div className={classes.rate__empty}>
        <StarOutlined/>
        <StarOutlined/>
        <StarOutlined/>
        <StarOutlined/>
        <StarOutlined/>
      </div>
      <div className={classes.rate__full} style={{ width: `${+rate * 20}%` }}>
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
        <StarFilled />
      </div>
    </div>
  )
}

export default Rating;