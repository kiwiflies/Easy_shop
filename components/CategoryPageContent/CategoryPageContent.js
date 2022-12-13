import React from 'react';
import classes from './styles.module.scss';
import Title from '../Title/Title';
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import CategoryMenu from '../CategoryMenu/CategoryMenu';
import SalesAdd from '../Adds/SalesAdd';
import FilterDropdown from '../FilterDropdown/FilterDropdown';

const data = {
    category_description: "Trendy or casual – shop our full selection of dresses here. Whether you’re in the mood for glitzy prom dresses, casual shirt dresses or night out bodycon styles, we have got you covered. Looking for an outfit for a big event? Our party dresses offer plenty of styles to flatter every figure. If you want to mix up your everyday outfits for work or play, take a look at our jumper dresses and midi dresses for both smart and casual options. ",
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


function CategoryPageContent() {
  const { title1, title2 } = useSelector((state) => state.product);

  return (
    <div className='flex'>
        <div className={classes.category_page_left}>
            <CategoryMenu/>
        </div>
        <div className={classes.category_page_right}>
            <Title text={title1}/>
            <div className={classes.category_page_add}>
                <SalesAdd/>
            </div>
            <Title text={title2}/>
            <div className={classes.category_description}>
                {data.category_description}
            </div>
            <div className={classes.category_filters}>
                <FilterDropdown data={data}/>
            </div>
        </div>
    </div>
  )
}
export default CategoryPageContent
