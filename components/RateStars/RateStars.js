import React, { useState } from "react";
import classes from "./styles.module.scss";
import { StarIcon, StarGreyIcon } from '../Icons';


const Star = ({ marked, starId }) => {
    return (
      <span data-star-id={starId} className={classes.star} role="button">
        {marked ? '\u2605' : '\u2606'}
      </span>
    );
  };
function RateStars ({ value, state, setState }) {
    const [selection, setSelection] = React.useState(0);
  
    const hoverOver = event => {
      let val = 0;
      if (event && event.target && event.target.getAttribute('data-star-id'))
        val = event.target.getAttribute('data-star-id');
      setSelection(val);
    };

  return (
    <div
    onMouseOut={() => hoverOver(null)}
    onClick={e => setState(e.target.getAttribute('data-star-id') || state)}
    onMouseOver={hoverOver}
  >
    {Array.from({ length: 5 }, (v, i) => (
      <Star
        starId={i + 1}
        key={`star_${i + 1}`}
        marked={selection ? selection >= i + 1 : state >= i + 1}
      />
    ))}
  </div>
  );
}
export default RateStars;
