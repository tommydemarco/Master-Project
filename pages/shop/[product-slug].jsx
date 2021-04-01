import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import DetailsBody from '../../components/Shop/DetailsBody';

const ProductDetails = () => {
    const bannerText = {
        title: null,
        subtitle: null,
    };
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, bannerText);
    
    return (
        <DetailsBody />
    );
}
        

export default ProductDetails;