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
                <Tab
                    title="Add New Post"
                    id="add-post"
                    list={[
                        "Add a new post to the post list",
                        "Use the markdown editor to insert the content",
                        "Make sure to upload an optimsed image",
                    ]}
                />
                <Tab
                    title="Manage Posts"
                    id="manage-posts"
                    align="right"
                    list={[
                        "Edit an existing Post",
                        "Delete an existing Post",
                        "Manage the Featured tag of an existing Post",
                    ]}
                />
                <Tab
                    title="Add New Product"
                    id="add-product"
                    list={[
                        "Add a new Product to the Products list",
                        "Use the markdown editor to insert the content",
                        "Make sure to upload an optimsed image",
                        "Make sure to insert the correct price",
                    ]}
                />
                <Tab
                    title="Manage Products"
                    id="manage-products"
                    align="right"
                    list={[
                        "Edit an existing Product",
                        "Delete an existing Product",
                        "Apply a discount to an existing Product",
                    ]}
                />
                <Tab
                    title="View Orders"
                    id="view-orders"
                    list={[
                        "View the existing Orders",
                        "Update the state of an existing Order",
                        "Send an email to the client of a specific Order",
                    ]}
                />
            </Tabs>
        </Fragment>
    );
};

export default AndminAreaPage;
