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

const data = [{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 22.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  rate: 2,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 13.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  rate: 3,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 15.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  rate: 1.5,
  item_img:"/image/dress.png"
},
{
  product_name: "CRelaxed Fit Patterned cotton T-shirt",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  rate: 1,
  item_img:"/image/dress.png"
},
];
const data1 = [{
  product_name: "Relaxed Fit Patterned cotton T-shirt",
  product_category: "Jumpsuit",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  item_img:"/image/dress.png"
},
{
  product_name: "Relaxed Fit Patterned cotton T-shirt",
  product_category: "Jumpsuit",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  item_img:"/image/dress.png"
},
{
  product_name: "Relaxed Fit Patterned cotton T-shirt",
  product_category: "Jumpsuit",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  item_img:"/image/dress.png"
}];
const data2 = [{
  product_name: "Cotton cheesecloth jumpsuit",
  product_category: "Jumpsuit",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  item_img:"/image/dress.png"
},
{
  product_name: "Cotton cheesecloth jumpsuit",
  product_category: "Jumpsuit",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  item_img:"/image/dress.png"
},
{
  product_name: "Cotton cheesecloth jumpsuit",
  product_category: "Jumpsuit",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  item_img:"/image/dress.png"
},
{
  product_name: "Cotton cheesecloth jumpsuit",
  product_category: "Jumpsuit",
  price: "£ 50.99",
  sale_price: "£ 24.99",
  sale_number: "50%",
  colors: ["#B0B6AC", "#55614D", "#ffffff"],
  item_img:"/image/dress.png"
}];


function Home() {
  return (
    <MainLayout pagetitle="Home">
        <SwitchComponentsHOC
          list={[
            { SliderMain: <AddSliderMain /> },
            { SliderSec: <AddSliderSec /> },
            { SliderThird: <AddSliderThird /> },
          ]}
        />
        <SwitchComponentsHOC
          list={[
            { NewSaleMain: <NewSaleMain/> },
            { NewSaleSec: <NewSaleSec/> },
            { NewSaleThird: <NewSaleThird/> },
          ]}
        />
        <SwitchComponentsHOC
          list={[
            { ProductCardMain: <SeeAllPartMain title="Woman" href="/" list={data} Component={ProductCardMain}/>},
            { ProductCardSec: <SeeAllPartSec title="Woman" href="/" list={data1} Component={ProductCardSec}/>},
            { ProductCardThird: <SeeAllPartThird title="Woman" href="/" list={data2} Component={ProductCardThird}/>},
          ]}
        />
        <Subscribe white/>
        <SwitchComponentsHOC
          list={[
            { ProductCardMain: <SeeAllPartMain title="Men" href="/" list={data} Component={ProductCardMain}/>},
            { ProductCardSec: <SeeAllPartSec title="Men" href="/" list={data1} Component={ProductCardSec}/>},
            { ProductCardThird: <SeeAllPartThird title="Men" href="/" list={data2} Component={ProductCardThird}/>},
          ]}
        />
        <SwitchComponentsHOC
          list={[
            { ProductCardMain: <SeeAllPartMain title="Kids" href="/" list={data} Component={ProductCardMain}/>},
            { ProductCardSec: <SeeAllPartSec title="Kids" href="/" list={data1} Component={ProductCardSec}/>},
            { ProductCardThird: <SeeAllPartThird title="Kids" href="/" list={data2} Component={ProductCardThird}/>},
          ]}
        />
      </MainLayout>
  );
}
export default Home;
