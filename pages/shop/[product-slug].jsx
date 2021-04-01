import React, { Component } from 'react';
import Navbar from '../../components/Layouts/Navbar';
import Footer from '../../components/Layouts/Footer';
import DetailsBody from '../../components/Shop/DetailsBody';

class ShopOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar noBanner={true} />
                <DetailsBody />
                <Footer />
            </React.Fragment>
        );
    }
}

export default ShopOne;