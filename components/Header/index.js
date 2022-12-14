import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchComponentsHOC from "../../HOC/SwitchComponentsHOC/SwitchComponentsHOC";
import { API } from "../redux/product/API";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderSec from "./HeaderSec/HeaderSec";
import HeaderThird from "./HeaderThird/HeaderThird";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import { useWindowSize } from "../../helpers/useWindowSize";

const Header = ({categories}) => {
    const dispatch = useDispatch();
    const { productCategoryData } = useSelector((state) => state.product);
    const menuList = categories || productCategoryData;
  
    useEffect(() => {
      dispatch(API.getProductCategory());
    }, [dispatch]);

    const [width] = useWindowSize();

    return (
      <>
        {width >= 767 ? (
        <SwitchComponentsHOC
          list={[
            { HeaderMain: <HeaderMain categories={menuList} /> },
            { HeaderSec: <HeaderSec categories={menuList} /> },
            { HeaderThird: <HeaderThird categories={menuList} /> },
          ]}
        />) : (
        <HeaderMobile categories={menuList}/>)}
      </>
    )
}

export default Header;