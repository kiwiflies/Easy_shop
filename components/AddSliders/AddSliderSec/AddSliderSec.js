import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import ButtonWhite from '../../Buttons/ButtonWhite/ButtonWhite'


function SliderSec () {
    return (
        <>
            <Swiper loop={true} pagination={{clickable: true,}} modules={[Pagination]} className='slider_sec'>
                <SwiperSlide>
                    <a href='#' target="_blank">
                        <img src="/image/sliderpic2.png"/>
                        <div className={classes.slider_button_part}>
                            <ButtonWhite text="Shop now"/>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' target="_blank">
                        <img src="/image/sliderpic2.png"/>
                        <div className={classes.slider_button_part}>
                            <ButtonWhite text="Shop now"/>
                        </div>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' target="_blank">
                        <img src="/image/sliderpic2.png"/>
                        <div className={classes.slider_button_part}>
                            <ButtonWhite text="Shop now"/>
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    )
  }
  export default SliderSec