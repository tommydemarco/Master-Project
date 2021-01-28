import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import Footer from '../components/Layouts/Footer';
import Banner from '../components/Shop/Banner';
import ShopVTwo from '../components/Shop/ShopVTwo';

class ShopOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <ShopVTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopOne;