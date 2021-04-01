import React, { Component } from "react";
import Banner from "../components/Banner";
import Link from "next/link";
import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";

class TeamOne extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner
                    title="Thank you"
                    subtitle="With your order you have supported our small businness"
                />

                <div className="thank-you-area">
                    <div className="container">
                        <h1>Your order has been confirmed.</h1>
                        <Link href="/">
                            <a className="btn btn-primary">Go Home</a>
                        </Link>
                    </div>
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default TeamOne;
