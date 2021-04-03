import { Fragment, useContext } from "react";
import { bannerContext } from "../../context";
import useBannerUpdate from "../../hooks/useBannerUpdate";

import Banner from "../../components/Banner";

const AndminAreaPage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <Fragment>
            <Banner
                title="Admin Area"
                subtitle="Welcome back to the admin area"
            />
        </Fragment>
    );
};

export default AndminAreaPage;
