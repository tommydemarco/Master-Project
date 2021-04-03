import { Fragment, useContext } from "react";
import { bannerContext } from "../../context";
import useBannerUpdate from "../../hooks/useBannerUpdate";

import Banner from "../../components/Banner";
import Tabs from "../../components/Tabs";

const AndminAreaPage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <Fragment>
            <Banner
                title="Admin Area"
                subtitle="Welcome back to the admin area"
            />
            <Tabs />
        </Fragment>
    );
};

export default AndminAreaPage;
