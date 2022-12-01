import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState, useCallback } from "react";
import { ArrowSmallLeft, ArrowSmallRight, TwoArrowsLeft, TwoArrowsRight } from "../../Icons";
import classes from './styles.module.scss';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import ButtonZoom from '../../Buttons/ButtonZoom/ButtonZoom';
import { useDispatch } from "react-redux";
import { modalClose, modalData } from "../../redux/ModalSlice/slice";



function ProductSliderMain({data}) {
  const dispatch = useDispatch()
  const handleClick = event => {
    setZoomModal(true)
  };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const swiperRef = useRef(null);
    const swiperRef2 = useRef(null);

    const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
    }, []);

    const handlePrev1 = useCallback(() => {
      if (!swiperRef2.current) return;
      swiperRef2.current.swiper.slidePrev();
      }, []);
  
      const handleNext1 = useCallback(() => {
      if (!swiperRef2.current) return;
      swiperRef2.current.swiper.slideNext();
      }, []);

  return (
    <div>
        <div className={classes.top_slider}>
          <Swiper ref={swiperRef2}
            loop={true}
            spaceBetween={10}
            navigation={false}
            thumbs={{ swiper: thumbsSwiper }}
            
            modules={[FreeMode, Navigation, Thumbs]}
            className={classes.mySwiper2}
          >
            {data.image?.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item}/>
                </SwiperSlide>))}
          <ButtonZoom onClick={() => {
            dispatch(modalData(data.image))
            dispatch(modalClose(true))
            }}/>
          </Swiper>
          <button onClick={handlePrev1} className={classes.button_prev}>
                <TwoArrowsLeft />
            </button>
            <button onClick={handleNext1} className={classes.button_next}>
                <TwoArrowsRight />
            </button>
        </div>
        <div className={classes.bottom_slider}>
            <Swiper ref={swiperRef}
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10} 
              slidesPerView={5}
              freeMode={true}
              navigation={false}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs, Navigation]}
              className={classes.mySwiper}
            >
              {data.image?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item}/>
                  </SwiperSlide>))}
            </Swiper>
            <button onClick={handlePrev} className={classes.button_prev}>
                <ArrowSmallLeft />
            </button>
            <button onClick={handleNext} className={classes.button_next}>
                <ArrowSmallRight />
            </button>
        </div>
    </div>
  );
}
export default ProductSliderMain;
