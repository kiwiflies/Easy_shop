import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useCallback, useRef } from "react";
import { PrevCircle, NextCircle } from "../../Icons";
import ProductCardThird from '../../ProductCards/ProductCardThird/ProductCardThird';

const data = [{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
];
const data1 = [{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  product_category: "Jumpsuit",
  item_img:"/image/dress.png"
},
];
const settings = {
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 10,
}
function NewSaleThird() {
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
    <div className='tabs_part_third'>
      <Tabs>
        <TabList>
          <Tab>
              <div className={classes.new_tab}>
                New arrivals
              </div>
          </Tab>
          <Tab>
              <div className={classes.search_tab}>
                Sale
              </div>
          </Tab>
        </TabList>

        <TabPanel>
          <div className={classes.slider_part}>
            <Swiper {...settings} ref={swiperRef}>
              {data?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProductCardThird product_name={item.product_name}
                                  productType={item.productType}
                                  price={item.price}
                                  colors={item.colors}
                                  product_category={item.product_category}
                                  item_img={item.item_img}/>
                  </SwiperSlide>
                  ))}
            </Swiper>
            <button onClick={handlePrev} className={classes.button_prev}>
                <PrevCircle />
            </button>
            <button onClick={handleNext} className={classes.button_next}>
                <NextCircle />
            </button>
          </div>
          <div className={classes.view_all_link}>
            <a href='#'>View all</a>
          </div>
        </TabPanel>
        <TabPanel>
        <div className={classes.slider_part}>
            <Swiper {...settings} ref={swiperRef}>
              {data1?.map((item) => (
                  <SwiperSlide key={item.id}>
                    <ProductCardThird product_name={item.product_name} 
                                  productType={item.productType} 
                                  price={item.price}
                                  sale_price={item.sale_price}
                                  sale_number={item.sale_number}
                                  colors={item.colors}
                                  product_category={item.product_category}
                                  item_img={item.item_img}/>
                  </SwiperSlide>
                ))}
            </Swiper>
            <button onClick={handlePrev} className={classes.button_prev}>
                <PrevCircle />
            </button>
            <button onClick={handleNext} className={classes.button_next}>
                <NextCircle />
            </button>
          </div>
          <div className={classes.view_all_link}>
            <a href='#'>View all</a>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
};
export default NewSaleThird;