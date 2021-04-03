import { Fragment, useContext } from "react";
import { bannerContext } from "../../context";
import useBannerUpdate from "../../hooks/useBannerUpdate";

import Banner from "../../components/Banner";
import Tabs from "../../components/Tabs";
import Tab from "../../components/Tab";

const AndminAreaPage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <Fragment>
            <Banner
                title="Admin Area"
                subtitle="Welcome back to the admin area"
            />
            <Tabs active="add-post">
                <Tab title="Add Post" id="add-post" />
                <Tab title="Manage Posts" id="manage-posts" />
                <Tab title="Add Product" id="add-product" />
                <Tab title="Manage Products" id="manage-products" />
                <Tab title="View Orders" id="view-orders" />
            </Tabs>
        </Fragment>
    );
};

export default AndminAreaPage;
