import React, { Component } from "react";
import NavLink from "../../NavLink/NavLink";
import classes from './styles.module.scss';
import { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ProductPrev, ProductNext } from "../../Icons";


const settings = {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 90,
  }

export default function SeeAllPartSec({ href, title, list, productType, Component }) {

    const swiperRef = useRef(null);

    const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
    }, []);

  return (
    <div className={classes.see_all_part}>
      <div className={classes.see_all_top}>
        <div className={classes.see_all_title}>
          {title}
        </div>
        <div className="flex justify-end">
            <div>
                <NavLink href={href} className={classes.view_all}>
                    View all products
                </NavLink>
            </div>
            <div>
                <button onClick={handlePrev} className={classes.button_prev}>
                    <ProductPrev />
                </button>
                <button onClick={handleNext} className={classes.button_next}>
                    <ProductNext />
                </button>
            </div>
        </div>
        
      </div>
      <div className={classes.slider_part}>
        <Swiper {...settings} ref={swiperRef}>
          {list?.map((item, id) => (
              <SwiperSlide>
                <div key={id}>
                    <Component productType={productType} {...item} />
                </div>
              </SwiperSlide>))}
              
        </Swiper>
      </div>
    </div>
  );
}
