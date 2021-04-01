import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import ShopVTwo from '../../components/Shop/ShopVTwo';

const Shop = () => {
    const bannerText = {
        title: "Welcome to our shop",
        subtitle: "Get some awesome Javascript merchandise",
    };
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, bannerText);

    return (
        <>
            <ShopVTwo />
        </>
    );
}

export default Shop;