import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef, useState, useCallback } from "react";
import { UpArrow, DownArrow } from "../../Icons";
import classes from './styles.module.scss';
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import ButtonZoom from '../../Buttons/ButtonZoom/ButtonZoom';
import { useDispatch } from "react-redux";
import { modalClose, modalData } from "../../redux/ModalSlice/slice";


function ProductSliderSec({data}) {
  const dispatch = useDispatch()
  const handleClick = event => {
    setZoomModal(true)
  };

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
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
    <div style={{display:"flex"}}>
          
            <div className={classes.left_slider}>
                <Swiper ref={swiperRef}
                  style={{height: "600px",
                    "--swiper-navigation-color": "#000",
                    "--swiper-pagination-color": "#000",
                  }}
                  thumbs={{ swiper: thumbsSwiper }}
                  loop={true}
                  spaceBetween={20} 
                  slidesPerView={3}
                  freeMode={true}
                  navigation={false}
                  direction={"vertical"}
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
                    <UpArrow />
                  </button>
                  <button onClick={handleNext} className={classes.button_next}>
                      <DownArrow />
                  </button>
            </div>
            <div className={classes.right_slider}>
              <Swiper
                
                loop={true}
                spaceBetween={10}
                // navigation={true}
                onSwiper={setThumbsSwiper}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
              >
                {data.image?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img src={item}/>
                    </SwiperSlide>))}
              </Swiper>
              <ButtonZoom onClick={() => {
                dispatch(modalData(data.image))
                dispatch(modalClose(true))
                }}/>
            </div>
          </div>
          
    </>
  );
}
export default ProductSliderSec;
