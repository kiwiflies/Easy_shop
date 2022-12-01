import classes from "./styles.module.scss";
import { NextArrow, PrevArrow, Close } from "../Icons";
import { useCallback, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, modalData } from "../redux/ModalSlice/slice";
import {isArray} from 'lodash'

function ZoomModal() {
  const { data, review_data, display } = useSelector((state) => state.modal);
  const swiperRef = useRef(null);
  const dispatch = useDispatch();
  const handlePrev = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperRef.current) return;
    swiperRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    document.body.style.overflow = display ? "hidden" : "auto";
  }, [display]);
  const closeFunc = (e) => {
    dispatch(modalClose(false))
  }
  return (
    <div
      className={classes.zoom_main}
      style={{ display: display ? "block" : "none" }}
      onClick={closeFunc}
    >
        <div onClick={closeFunc} className={classes.zoom_close}>
            <Close/>
        </div>
      <div className={classes.zoom_container} onClick={(e) => e.stopPropagation()}>
        <div className={classes.zoom_slider_part}>
            <Swiper loop={true} className={classes.slider_zoom} ref={swiperRef}>
            {isArray(data) && data.length ? data?.map((item, id) => {
                return (
                <SwiperSlide key={id}>
                      <img src={item} />
                </SwiperSlide>
                );
            }) : review_data?.reviews?.[1].reviewPics?.pic?.map((item, id) => {
              return (
              <SwiperSlide key={id}>
                    <img src={item} />
              </SwiperSlide>
              );
          }) }
            </Swiper>
        </div>
        <button onClick={handlePrev} className={classes.button_prev}>
          <PrevArrow />
        </button>
        <button onClick={handleNext} className={classes.button_next}>
          <NextArrow />
        </button>
      </div>
    </div>
  );
}
export default ZoomModal;
