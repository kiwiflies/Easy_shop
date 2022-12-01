import React, {useState, useEffect} from 'react'; 
import classes from './styles.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import ProductDescriptionThird from '../../ProductDescription/ProductDescriptionThird/ProductDescriptionThird';
import ProductCardThird from '../../ProductCards/ProductCardThird/ProductCardThird';
import CustomAccordion from '../../CustomAccordion/CustomAccordion';
import ButtonZoom from '../../Buttons/ButtonZoom/ButtonZoom';
import { useDispatch } from "react-redux";
import { modalClose, modalData } from "../../redux/ModalSlice/slice";
import ProductReviewsThird from '../../ProductReviews/ProductReviewsThird/ProductReviewsThird';




const data = {
  image: [
    "/image/dress.png",
    "/image/style.jpg",
    "/image/dress.png",
    "/image/dress.png",
    "/image/dress.png",
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
  rate: 3.5,
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
      reviewTime: "22.09.2022",
      reviewRate: "4",
      reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus cursus amet neque pharetra faucibus. Ut ullamcorper velit sit quisque varius sed eget. Molestie elementum eu dolor, ullamcorper pretium, amet massa varius condimentum. Vitae ridiculus amet, praesent nisl consequat morbi. ",

    },
    {
      customerName: "Jane",
      customerSurname: "Fonda",
      reviewTime: "22.09.2022",
      reviewRate: "2.5",
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
      reviewTime: "22.09.2022",
      reviewRate: "3.5",
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
  item_img:"/image/dress.png",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  rate:4,
  item_img:"/image/dress.png",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "new_product",
  rate:1,
  item_img:"/image/dress.png",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  productType: "sale",
  rate:3,
  item_img:"/image/dress.png",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
},
];

const settings = {
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 1,
}
  
function ProductPageThird() {

  const dispatch = useDispatch()
  const handleClick = event => {
    setZoomModal(true)
  };


   return (
    <div className={classes.productpage_part}>
        <div className={classes.productpage_top}>
          <div className={classes.productpage_pics}>
            {data.image.slice(0, 4).map((item) => (
              <div className={classes.productpage_pics_one}>
                <img src={item}/>
              </div>
            ))}
            <CustomAccordion className={classes.accordion}>
            {data.image.slice(4, data.image.lenght).map((item) => (
              <div className={classes.productpage_pics_one}>
                <img src={item}/>
              </div>
            ))}
            </CustomAccordion>
            <ButtonZoom onClick={() => {
                dispatch(modalData(data?.image))
                dispatch(modalClose(true))
                }}/>
          </div>
          <div className={classes.productpage_description}>
              <ProductDescriptionThird data={data}/>
          </div>
        </div>
        <div className={classes.productpage_bottom_text}>
          Customers also viewed
        </div>
        <div className={classes.productpage_bottom_products}>
          <Swiper {...settings}>
              {data1?.map((item) => (
                  <SwiperSlide>
                    <div style={{marginRight: "20px"}}>
                      <ProductCardThird product_name={item.product_name}
                                    productType={item.productType}
                                    price={item.price}
                                    sale_price={item.sale_price}
                                    sale_number={item.sale_number}
                                    rate={item.rate}
                                    item_img={item.item_img}
                                    viewed_product
                                    colors={item.colors}/>
                    </div>
                  </SwiperSlide>
                  ))}
          </Swiper>
        </div>
          <ProductReviewsThird dataArray={data}/>
    </div>
   )
 }
 export default ProductPageThird