import React, { Component } from "react";
import NavLink from "../../NavLink/NavLink";
import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { useTranslation } from "react-i18next";


const settings = {
    pagination: {clickable: true},
    loop: true,
    slidesPerView: 4,
    spaceBetween: 10,
  }

export default function SeeAllPartThird({ href, title, list, productType, Component }) {

  const {t} = useTranslation();

  return (
    <div className={classes.see_all_part}>
      <div className={classes.see_all_top}>
        <div className={classes.see_all_title}>
          {title}
        </div>
        <NavLink href={href} className={classes.view_all}>
        {t("view_all")}
        </NavLink>
      </div>
      <div className={classes.slider_part}>
        <Swiper {...settings} modules={[Pagination]} className='see_all_slider'>
            {list?.map((item) => (
                <SwiperSlide key={item.id}>
                <div>
                    <Component productType={productType} {...item} />
                </div>
                </SwiperSlide>))}
        </Swiper>
      </div>
    </div>
  );
}
