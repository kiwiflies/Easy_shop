import React, { useEffect } from 'react';
import classes from "./styles.module.scss";
import Title from "../Title/Title";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../redux/FooterSlice/API";


function ShippingContent () {

    const dispatch = useDispatch();
    const { footerPagesData } = useSelector((state) => state.footer);
    useEffect(() => {
      dispatch(API.getFooterPages());
    }, [dispatch]);
    console.log(footerPagesData)
  return (
    <div>
        <Title text="Shipping policy"/>
    </div>
  )
}
export default ShippingContent
