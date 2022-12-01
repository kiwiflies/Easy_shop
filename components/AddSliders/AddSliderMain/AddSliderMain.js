import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";



function SliderSec () {
    return (
        <>
            <Swiper navigation={true} loop={true} modules={[Navigation]} className='slider_main'>
                <SwiperSlide>
                    <a href='#' target="_blank">
                        <img src="/image/sliderpic1.png"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' target="_blank">
                        <img src="/image/sliderpic1.png"/>
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href='#' target="_blank">
                        <img src="/image/sliderpic1.png"/>
                    </a>
                </SwiperSlide>
            </Swiper>
        </>
    )
  }
  export default SliderSec