import React, { Component } from "react";

import Banner from "../components/Banner";
import CartBody from "../components/Cart/CartBody";

const CartPage = () => {
    return (
        <React.Fragment>
            <Banner
                title="Your Cart"
                subtitle="Your are just a click away from some awesome gadgets"
            />
            <CartBody />
        </React.Fragment>
    );
};

export default CartPage;
