import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import ShopVTwo from '../../components/Shop/ShopVTwo';

const Shop = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <>
            <ShopVTwo />
        </>
    );
}

export default Shop;