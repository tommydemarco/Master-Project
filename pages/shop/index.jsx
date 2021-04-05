import { useContext } from "react";
import { bannerContext } from "../../context";
import useBannerUpdate from "../../hooks/useBannerUpdate";

import Banner from "../../components/Banner";
import ShopVTwo from "../../components/Shop/ShopVTwo";

const Shop = () => {
  const { dispatch } = useContext(bannerContext);
  useBannerUpdate(dispatch, true);

  return (
    <>
      <Banner title="The Shop" subtitle="Welcome to our shop" />
      <ShopVTwo />
    </>
  );
};

export default Shop;
