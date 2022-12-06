import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SwitchComponentsHOC from "../../HOC/SwitchComponentsHOC/SwitchComponentsHOC";
import { API } from "../redux/product/API";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderSec from "./HeaderSec/HeaderSec";
import HeaderThird from "./HeaderThird/HeaderThird";

const Header = ({categories}) => {
    const dispatch = useDispatch();
    const { productCategoryData } = useSelector((state) => state.product);
    const menuList = categories || productCategoryData;
  
    useEffect(() => {
      dispatch(API.getProductCategory());
    }, [dispatch]);

    return (
        <SwitchComponentsHOC
          list={[
            { HeaderMain: <HeaderMain categories={menuList} /> },
            { HeaderSec: <HeaderSec categories={menuList} /> },
            { HeaderThird: <HeaderThird categories={menuList} /> },
          ]}
        />
    )
}

export default Header;