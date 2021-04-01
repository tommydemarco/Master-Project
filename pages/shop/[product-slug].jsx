import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import DetailsBody from '../../components/Shop/DetailsBody';

const ProductDetails = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, false);

    return (
        <DetailsBody />
    );
}
        

export default ProductDetails;