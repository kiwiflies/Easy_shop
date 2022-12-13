import React, { useCallback, useRef } from "react";
import ProductSliderMain from "../../ProductSliders/ProductSliderMain/ProductSliderMain";
import classes from "./styles.module.scss";
import ProductDescriptionMain from "../../ProductDescription/ProductDescriptionMain/ProductDescriptionMain";
import ProductReviewsMain from "../../ProductReviews/ProductReviewsMain/ProductReviewsMain";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductCardMain from '../../ProductCards/ProductCardMain/ProductCardMain';
import { PrevArrow, NextArrow } from "../../Icons";
import { useTranslation } from "react-i18next";


const data = {
  image: [
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
  ],
  itemTitle: "MADRAS ARCHIVE SHIRT",
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
  spaceBetween: 30,
}
function ProductPageMain() {

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
    <div className={classes.productpage_part}>
      <div className="flex">
        <div className={classes.productpage_left}>
          <ProductSliderMain data={data} />
        </div>
        <div className={classes.productpage_right}>
          <ProductDescriptionMain data={data} />
        </div>
      </div>
      <div className={classes.productpage_center}>
        <ProductReviewsMain data={data} />
      </div>
      <div className={classes.productpage_bottom}>
        <div className={classes.productpage_bottom_header}>
          Customers also viewed
        </div>
        <div className={classes.productpage_bottom_products}>
          <Swiper {...settings} ref={swiperRef}>
              {data1?.map((item, index) => (
                  <SwiperSlide key={index}>
                  <div style={{marginRight: "20px"}}>
                    <ProductCardMain product_name={item.product_name}
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
                <PrevArrow />
            </button>
            <button onClick={handleNext} className={classes.button_next}>
                <NextArrow />
            </button>
        </div>
      </div>
    </div>
  );
}
export default ProductPageMain;
