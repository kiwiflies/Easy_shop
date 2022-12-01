import classes from "./styles.module.scss";
import { useCallback, useEffect, useRef, useState } from "react";
import { Close } from "../../Icons";
import CustomReviewLeave from "../../CustomReviewLeave/CustomReviewLeave";
import ButtonGrey from "../../Buttons/ButtonGrey/ButtonGrey";
import ButtonBlue from "../../Buttons/ButtonBlue/ButtonBlue";
import InputMain from "../../InputMain/InputMain";
import dynamic from "next/dynamic";
import RateStars from "../../RateStars/RateStars";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, reviewClose } from "../../redux/ModalSlice/slice";
import Rating from "../../Rating/Rating";
import { StarFilled } from '../../Icons';



const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["image"],
  ],
  clipboard: {
    matchVisual: false,
  },
};
const formats = [
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

function ProductReviewsThird() {
  const { review_data, data, reviewDisplay } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [count, setCount] = useState(0);
  // const [isChecked, setIsChecked] = useState(false);
  const [closing, setClosing] = useState(true);

  useEffect(() => {
    if (closing) {
      if (data.reviews?.[2].reviewPics?.pic.length > 0) {
        setCount(data.reviews?.[2].reviewPics?.pic.length);
      }
      if (data.reviews?.[2].reviewPics?.pic.length >= 3) {
        document.getElementById("reviews_pic").style.display = "none";
      }
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = reviewDisplay ? "hidden" : "auto";
  }, [reviewDisplay]);
  const closeFunc = (e) => {
    dispatch(reviewClose(false))
  }

  return (
    <div
      className={classes.reviews_main}
      style={{ display: reviewDisplay ? "block" : "none" }}
      onClick={closeFunc}
    >
        <div onClick={closeFunc} className={classes.reviews_close}>
            <Close/>
        </div>
      <div className={classes.reviews_container} onClick={(e) => e.stopPropagation()}>
        <div className={classes.review_header}>Reviews</div>
        <div className={classes.productpage_rate}>
            <Rating rate={data.rate} fontSize="27px"/>
            <div className={classes.productpage_rate_number}>
                {data.rate}
            </div>
        </div>
        <div className={classes.productpage_buyed}>
          <span>Customer reviews</span><span>({data.itemBuyed})</span>
        </div>
        <div className={classes.leave_review}>
        <CustomReviewLeave
            closeState={setClosing}
            header="Leave a review"
            className={classes.review_accordion}
          >
            <div className="flex column">
              <div className={classes.review_new_rate}>
                <div className={classes.review_new}>Rate the product</div>
                <div>
                  <RateStars state={rating} setState={setRating} />
                </div>
              </div>
              <form className={classes.review_form}>
                <InputMain placeholder="Name" />
                <InputMain placeholder="Email address" />
                <QuillNoSSRWrapper
                  modules={modules}
                  formats={formats}
                  placeholder="Type something... (12 from 640 symbols)"
                  theme="snow"
                />
                <div className={classes.review_form_buttons}>
                  <ButtonGrey text="Cancel" type="reset" />
                  <ButtonBlue text="Submit" type="submit" />
                </div>
              </form>
            </div>
          </CustomReviewLeave>
          </div>
          {closing &&
            review_data?.reviews?.map((item, id) => (
              <div key={id} className={classes.review_parts}>
                <div className="flex between">
                  <div className="flex">
                    <div className={classes.review_customer_pic}>
                      <img
                        src={
                          item.customerPic
                            ? item.customerPic
                            : "/image/profile_pic.svg"
                        }
                        alt="customer_picture"
                      />
                    </div>
                    <div className="flex">
                      <span className={classes.review_name}>
                        {item.customerName} {item.customerSurname}
                      </span>
                    </div>
                  </div>
                  <div className="flex column align-end">
                    <div className={classes.review_rate}>
                      <Rating rate={item.reviewRate} fontSize="16px"/>
                    </div>
                    <div className={classes.review_time}>
                      {item.reviewTime}
                    </div>
                  </div>
                </div>
                <div className={classes.review_text}>{item.reviewText}</div>
                <div className={classes.review_pic_part}>
                  {item?.reviewPics?.pic?.map((item, id) => {
                    if (id < 4) {
                      return (
                        <div key={id} className={classes.review_pic}>
                          <img src={item} alt="review_picture" />
                        </div>
                      );
                    }
                  })}
                  <div
                    id="reviews_pic"
                    style={{ display: "flex" }}
                    className={classes.review_quantity}
                    onClick={() => {
                      dispatch(modalClose(true));
                    }}
                  >
                    (View more <span>{item?.reviewPics?.picQuantity - count}</span>
                    +)
                  </div>
                </div>
                <div className="flex justify-end">
                  <hr className={classes.review_line} />
                </div>
              </div>
            ))}
        </div>
      </div>
  );
}
export default ProductReviewsThird;
