import React, {useState, useEffect, useRef, useCallback} from 'react'; 
import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GreenStarStroke, GreenStar } from '../../Icons';
import ProductSliderSec from "../../ProductSliders/ProductSliderSec/ProductSliderSec";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import ProductReviewsSec from '../../ProductReviews/ProductReviewsSec/ProductReviewsSec';
import ProductDescriptionSec from '../../ProductDescription/ProductDescriptionSec/ProductDescriptionSec';
import ProductCardSec from '../../ProductCards/ProductCardSec/ProductCardSec';
import { PrevSmall, NextSmall } from "../../Icons";




const data = {
  image: [
    "/image/dress.png",
    "/image/style.jpg",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
  ],
  itemTitle: "Madras archive shirt",
  itemCode: "159874",
  saleNumber: "52",
  sale: {
    salePrice: "8,000",
  },
  price: "10,000",
  rate: 2,
  colorName: "Light Pastel Pink",
  color: ["#B9B9D4", "#D3B7B7", "#B7D3C7"],
  size: ["XXS", "M", "L", "XL", "XXL", "XXXL "],
  itemBuyed: "56",
  quantity: ["1", "2", "3"],
  description:
    "Tommy Hilfiger women's shirt. Meet the New Prep. A nod to our collegiate past in form and function, with contemporary twists for the woman of today. We've feminized menswear shirting for women with a contemporary twist on madras, styled in an unexpected seersucker. A limited-edition style from Tommy Hilfiger Collection.",
  shipping:
    "All online returns are free within 45 days of shipping confirmation. In order to process your return, items must be unworn and tags must be attached. Items marked Final Sale are not eligible for a return, refund or credit.",
  reviews: [
    {
      customerName: "Sam",
      customerSurname: "Smith",
      customerPic:"/image/pic.jpg",
      reviewTime: "1",
      reviewRate: "4",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus cursus amet neque pharetra faucibus. Ut ullamcorper velit sit quisque varius sed eget. Molestie elementum eu dolor, ullamcorper pretium, amet massa varius condimentum. Vitae ridiculus amet, praesent nisl consequat morbi. ",

    },
    {
      customerName: "Jane",
      customerSurname: "Fonda",
      reviewTime: "2",
      reviewRate: "5",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus cursus amet neque pharetra faucibus. Ut ullamcorper velit sit quisque varius sed eget. Molestie elementum eu dolor, ullamcorper pretium, amet massa varius condimentum. Vitae ridiculus amet, praesent nisl consequat morbi. ",
      reviewPics:{
        pic: [
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
          
        ],
        picQuantity: "15",
      },
    },
    {
      customerName: "Loren",
      customerSurname: "Ipsum",
      reviewTime: "2",
      reviewRate: "5",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus cursus amet neque pharetra faucibus. Ut ullamcorper velit sit quisque varius sed eget. Molestie elementum eu dolor, ullamcorper pretium, amet massa varius condimentum. Vitae ridiculus amet, praesent nisl consequat morbi. ",
      reviewPics:{
        pic: [
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
          "/image/style.jpg",
        ],
        picQuantity: "20",
      },
    },
  ],
};
const data1 = [{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "viewed",
  rate:5,
  item_img:"/image/dress.png"
},
{
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
  productType: "new_product",
  rate:1,
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
  spaceBetween: 10,
}
  
function ProductPageSec() {

  const swiperRef = useRef(null);

  const handlePrev = useCallback(() => {
  if (!swiperRef.current) return;
  swiperRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
  if (!swiperRef.current) return;
  swiperRef.current.swiper.slideNext();
  }, []);

  const [green, setGreen] = useState([]);
  const [white, setWhite] = useState([]);

  useEffect(() => {
    data.rate && setGreen(Array.from(Array(data.rate).keys()));
    data.rate && setWhite(Array.from(Array(5 - data.rate).keys()));
  }, [data.rate]);

   return (
    <div className={classes.productpage_part}>
        <div className='flex between'>
            <div className='flex column'>
              <div className={classes.productpage_item_title}>{data.itemTitle}</div>
              <div className={classes.productpage_item_code}>{data.itemCode}</div>
              <div className='flex'>
                <div className={classes.productpage_rate}>
                  {green.map((item, id) => {
                      return (
                      <div key={id} className={classes.star_green}>
                          <GreenStar/>
                      </div>);
                  })}

                  {white.map((item, id) => {
                      return (
                      <div key={id} className={classes.star_green_stroke}>
                          <GreenStarStroke/>
                      </div>);
                  })}
                  <div className={classes.productpage_buyed}>
                      ({data.itemBuyed})
                  </div>
                </div>
              </div>
            </div>
            <div className='flex column align-end'>
              {data.sale ? (<>
                      <div className={classes.product_sale_price}>
                          <span>AMD {data.price}</span>
                          <span>AMD {data.sale.salePrice}</span>
                      </div>
                      </>) : (
                      <div className={classes.product_price}>{data.price}</div>
                      )}
            </div>
        </div>
        <div className={classes.productpage_slider}>
          <ProductSliderSec data={data}/>
        </div>
        <div className='productsec_tabs'>
          <Tabs>
            <TabList>
              <Tab>Product details</Tab>
              <Tab>Reviews</Tab>
              <Tab>Shipping info</Tab>
            </TabList>
            <TabPanel>
              <ProductDescriptionSec data={data}/>
            </TabPanel>
            <TabPanel>
              <div className={classes.productpage_reviews}>
                <ProductReviewsSec data={data}/>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={classes.productpage_descrip}>
                {data.shipping}
              </div>
            </TabPanel>
          </Tabs>
        </div>
        <div className={classes.productpage_bottom_text}>
          Customers also viewed
        </div>
        <div className={classes.productpage_bottom_products}>
          <Swiper {...settings} ref={swiperRef}>
              {data1?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div style={{marginRight: "20px"}}>
                      <ProductCardSec product_name={item.product_name}
                                    productType={item.productType}
                                    price={item.price}
                                    sale_price={item.sale_price}
                                    sale_number={item.sale_number}
                                    rate={item.rate}
                                    item_img={item.item_img}
                                    viewed_product/>
                    </div>
                  </SwiperSlide>
                  ))}
          </Swiper>
          <button onClick={handlePrev} className={classes.button_prev}>
              <PrevSmall />
          </button>
          <button onClick={handleNext} className={classes.button_next}>
              <NextSmall />
          </button>
        </div>
    </div>
   )
 }
 export default ProductPageSec