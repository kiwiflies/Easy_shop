import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "../../Icons";
import { useCallback, useRef } from "react";
import ButtonBlue from '../../Buttons/ButtonBlue/ButtonBlue';

function SliderThird () {
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
        <>
            <Swiper loop={true} className='slider_third' ref={swiperRef}>
                <SwiperSlide>
                    <img src="/image/sliderpic3.png"/>
                    <div className={classes.slider_button_part}>
                        <ButtonBlue text="Shop"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/sliderpic3.png"/>
                    <div className={classes.slider_button_part}>
                        <ButtonBlue text="Shop"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/image/sliderpic3.png"/>
                    <div className={classes.slider_button_part}>
                        <ButtonBlue text="Shop"/>
                    </div>
                </SwiperSlide>
                <button onClick={handlePrev} className={classes.button_prev}>
                    <ArrowLeft />
                </button>
                <button onClick={handleNext} className={classes.button_next}>
                    <ArrowRight />
                </button>
            </Swiper>
        </>
    )
  }
  export default SliderThird