import React, { useEffect, useState } from "react";
import CustomAccordion from "../../CustomAccordion/CustomAccordion";
import ButtonGrey from "../../Buttons/ButtonGrey/ButtonGrey";
import ButtonBlue from "../../Buttons/ButtonBlue/ButtonBlue";
import InputMain from "../../InputMain/InputMain";
import classes from "./styles.module.scss";
import dynamic from 'next/dynamic'
import RateStars from "../../RateStars/RateStars";
import { useDispatch } from "react-redux";
import { modalClose, modalData } from "../../redux/ModalSlice/slice";

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
})

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['image'],
  ],
  clipboard: {
    matchVisual: false,
  },
}
const formats = [
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video',
]

function ProductReviewsMain({ data }) {
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0)

  useEffect(() =>{
    if (data.reviews[2].reviewPics?.pic.length > 0) {
      setCount (data.reviews[2].reviewPics?.pic.length)
    }
    if (data.reviews[2].reviewPics?.pic.length >= 3) {
      document.getElementById('reviews_pic').style.display="none"
    }
  },[]) 
  
  const dispatch = useDispatch()
  const handleClick = event => {
    setZoomModal(true)
  };

  return (
      <div className={classes.review_main}>
        <CustomAccordion header="Review" changing>
            {data.reviews?.map((item, id) => (
              <div key={id} className={classes.review_parts}>
                <div className="flex between">
                  <div className="flex">
                    <div className={classes.review_customer_pic}>
                      <img src={item.customerPic ? item.customerPic : "/image/profile_pic.svg"} alt="customer_picture" />
                    </div>
                    <div className="flex">
                      <span className={classes.review_name}>
                          {item.customerName} {item.customerSurname}
                      </span>
                    </div>
                  </div>
                  <div className="flex">
                      <div className={classes.review_time}>{item.reviewTime} hour ago</div>
                      <div className={classes.review_rate}>
                          <span>  
                              <img src="/icons/review_star.svg" alt="star" />
                          </span>
                          <span>
                              {item.reviewRate}
                          </span>
                      </div>
                  </div>
                </div>
                <div className={classes.review_text}>
                  {item.reviewText}
                </div>
                <div className={classes.review_pic_part}>
                  {item?.reviewPics?.pic?.map((item, id) => {
                  if (id<4) {
                    return ( 
                    <div key={id} className={classes.review_pic}>
                      <img src={item} alt="review_picture" />
                    </div>)}})}
                    <div id="reviews_pic" 
                          style={{display:"flex"}} 
                          className={classes.review_quantity} 
                          onClick={() => {
                            dispatch(modalData(item?.reviewPics?.pic))
                            dispatch(modalClose(true))
                            }}>
                      (View more <span>{item?.reviewPics?.picQuantity-count}</span>+)
                    </div>
                </div>
                <div className="flex justify-end">
                  <hr className={classes.review_line}/>
                </div>
              </div>
            ))}
        </CustomAccordion>
        <CustomAccordion header="Write a review" changing className={classes.review_accordion}>
          <div className="flex column">
            <div className={classes.review_new_rate}>
              <div className={classes.review_new}>Rate the product</div>
              <div><RateStars state={rating} setState={setRating}/></div>
            </div>
            <form className={classes.review_form}>
                <InputMain
                    placeholder="Name"/>
                <InputMain
                    placeholder="Email address"/>
                <QuillNoSSRWrapper
                  modules={modules} 
                  formats={formats}
                  placeholder='Type something... (12 from 640 symbols)' 
                  theme="snow" />
                  <div className={classes.review_form_buttons}>
                    <ButtonGrey text="Cancel" type="reset"/>
                    <ButtonBlue text="Submit" type="submit"/>
                  </div>
            </form>
          </div>
        </CustomAccordion>
      </div>
  );
}
export default ProductReviewsMain;
