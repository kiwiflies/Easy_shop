import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useCallback, useRef } from "react";
import { PrevArrow, NextArrow } from "../../Icons";
import ProductCardMain from '../../ProductCards/ProductCardMain/ProductCardMain';
import { useTranslation } from "react-i18next";


const data = [{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  rate: 2,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  rate:1.5,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  rate:5,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  rate:1,
  item_img:"/image/dress.png"
},
];
const data1 = [{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  rate:4,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  rate:3,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  rate:2.5,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  rate:3,
  item_img:"/image/dress.png"
},
];

const settings = {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 30,
}
function NewSaleMain() {
  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
  if (!swiperRef.current) return;
  swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
  if (!swiperRef.current) return;
  swiperRef.current.swiper.slideNext();
  }, []);

  const {t} = useTranslation();

  
  return (
    <div className='tabs_part_main'>
      <Tabs>
        <TabList>
          <Tab>
              <div className={classes.new_tab}>
                {t("new_arrivals")}
              </div>
          </Tab>
          <Tab>
              <div className={classes.search_tab}>
              {t("sale")}
              </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className={classes.slider_part}>
            <Swiper {...settings} ref={swiperRef}>
              {data?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardMain product_name={item.product_name}
                                  productType={item.productType}
                                  price={item.price}
                                  rate={item.rate}
                                  item_img={item.item_img}/>
                  </SwiperSlide>))}
                  
            </Swiper>
            <button onClick={handlePrev} className={classes.button_prev}>
                <PrevArrow />
            </button>
            <button onClick={handleNext} className={classes.button_next}>
                <NextArrow />
            </button>
          </div>
          <div className={classes.see_all_link}>
            <a href='#'>{t("see_all")}</a>
          </div>
        </TabPanel>
        <TabPanel>
        <div className={classes.slider_part}>
            <Swiper {...settings} ref={swiperRef}>
              {data1?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardMain product_name={item.product_name}
                                  productType={item.productType}
                                  price={item.price}
                                  sale_price={item.sale_price}
                                  sale_number={item.sale_number}
                                  rate={item.rate}
                                  item_img={item.item_img}/>
                  </SwiperSlide>))}
                  
            </Swiper>
            <button onClick={handlePrev} className={classes.button_prev}>
                <PrevArrow />
            </button>
            <button onClick={handleNext} className={classes.button_next}>
                <NextArrow />
            </button>
          </div>
          <div className={classes.see_all_link}>
            <a href='#'>{t("see_all")}</a>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
};
export default NewSaleMain;