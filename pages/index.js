import MainLayout from "../layouts/MainLayout";
import AddSliderMain from "../components/AddSliders/AddSliderMain/AddSliderMain";
import AddSliderSec from "../components/AddSliders/AddSliderSec/AddSliderSec";
import AddSliderThird from "../components/AddSliders/AddSliderThird/AddSliderThird";
import ProductCardMain from "../components/ProductCards/ProductCardMain/ProductCardMain";
import ProductCardSec from "../components/ProductCards/ProductCardSec/ProductCardSec";
import ProductCardThird from "../components/ProductCards/ProductCardThird/ProductCardThird";
import SwitchComponentsHOC from "../HOC/SwitchComponentsHOC/SwitchComponentsHOC";
import SeeAllPartMain from "../components/SeeAllParts/SeeAllPartMain/SeeAllPartMain";
import SeeAllPartSec from "../components/SeeAllParts/SeeAllPartSec/SeeAllPartSec";
import SeeAllPartThird from "../components/SeeAllParts/SeeAllPartThird/SeeAllPartThird";
import Subscribe from "../components/Subscribe/Subscribe";
import NewSaleMain from "../components/TabsNewSale/NewSaleMain/NewSaleMain";
import NewSaleSec from "../components/TabsNewSale/NewSaleSec/NewSaleSec";
import NewSaleThird from "../components/TabsNewSale/NewSaleThird/NewSaleThird";
import getCategories from "./api/getCategories";
import { useTranslation } from "react-i18next";


const data = [
  {
    product_name: "CRelaxed Fit Patterned cotton T-shirt",
    price: "£ 22.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    rate: 2,
    item_img: "/image/dress.png",
  },
  {
    product_name: "CRelaxed Fit Patterned cotton T-shirt",
    price: "£ 13.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    rate: 3,
    item_img: "/image/dress.png",
  },
  {
    product_name: "CRelaxed Fit Patterned cotton T-shirt",
    price: "£ 15.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    rate: 1.5,
    item_img: "/image/dress.png",
  },
  {
    product_name: "CRelaxed Fit Patterned cotton T-shirt",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    rate: 1,
    item_img: "/image/dress.png",
  },
];
const data1 = [
  {
    product_name: "Relaxed Fit Patterned cotton T-shirt",
    product_category: "Jumpsuit",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    item_img: "/image/dress.png",
  },
  {
    product_name: "Relaxed Fit Patterned cotton T-shirt",
    product_category: "Jumpsuit",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    item_img: "/image/dress.png",
  },
  {
    product_name: "Relaxed Fit Patterned cotton T-shirt",
    product_category: "Jumpsuit",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    item_img: "/image/dress.png",
  },
];
const data2 = [
  {
    product_name: "Cotton cheesecloth jumpsuit",
    product_category: "Jumpsuit",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    colors: ["#B0B6AC", "#55614D", "#ffffff"],
    item_img: "/image/dress.png",
  },
  {
    product_name: "Cotton cheesecloth jumpsuit",
    product_category: "Jumpsuit",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    colors: ["#B0B6AC", "#55614D", "#ffffff"],
    item_img: "/image/dress.png",
  },
  {
    product_name: "Cotton cheesecloth jumpsuit",
    product_category: "Jumpsuit",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    colors: ["#B0B6AC", "#55614D", "#ffffff"],
    item_img: "/image/dress.png",
  },
  {
    product_name: "Cotton cheesecloth jumpsuit",
    product_category: "Jumpsuit",
    price: "£ 50.99",
    sale_price: "£ 24.99",
    sale_number: "50%",
    colors: ["#B0B6AC", "#55614D", "#ffffff"],
    item_img: "/image/dress.png",
  },
];

function Home({ categories }) {

  const {t} = useTranslation();

  return (
    <MainLayout pagetitle="Home" categories={categories}>
      <SwitchComponentsHOC
        list={[
          { SliderMain: <AddSliderMain /> },
          { SliderSec: <AddSliderSec /> },
          { SliderThird: <AddSliderThird /> },
        ]}
      />
      <SwitchComponentsHOC
        list={[
          { NewSaleMain: <NewSaleMain /> },
          { NewSaleSec: <NewSaleSec /> },
          { NewSaleThird: <NewSaleThird /> },
        ]}
      />
      <SwitchComponentsHOC
        list={[
          {
            ProductCardMain: (
              <SeeAllPartMain
                title={t("women")}
                href=""
                list={data}
                Component={ProductCardMain}
              />
            ),
          },
          {
            ProductCardSec: (
              <SeeAllPartSec
                title={t("women")}
                href=""
                list={data1}
                Component={ProductCardSec}
              />
            ),
          },
          {
            ProductCardThird: (
              <SeeAllPartThird
                title={t("women")}
                href=""
                list={data2}
                Component={ProductCardThird}
              />
            ),
          },
        ]}
      />
      <Subscribe white />
      <SwitchComponentsHOC
        list={[
          {
            ProductCardMain: (
              <SeeAllPartMain
                title={t("men")}
                href=""
                list={data}
                Component={ProductCardMain}
              />
            ),
          },
          {
            ProductCardSec: (
              <SeeAllPartSec
                title={t("men")}
                href=""
                list={data1}
                Component={ProductCardSec}
              />
            ),
          },
          {
            ProductCardThird: (
              <SeeAllPartThird
                title={t("men")}
                href=""
                list={data2}
                Component={ProductCardThird}
              />
            ),
          },
        ]}
      />
      <SwitchComponentsHOC
        list={[
          {
            ProductCardMain: (
              <SeeAllPartMain
                title={t("kids")}
                href=""
                list={data}
                Component={ProductCardMain}
              />
            ),
          },
          {
            ProductCardSec: (
              <SeeAllPartSec
                title={t("kids")}
                href=""
                list={data1}
                Component={ProductCardSec}
              />
            ),
          },
          {
            ProductCardThird: (
              <SeeAllPartThird
                title={t("kids")}
                href=""
                list={data2}
                Component={ProductCardThird}
              />
            ),
          },
        ]}
      />
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   const categories = await getCategories();

//   return { props: { categories } };
// }

export default Home;
