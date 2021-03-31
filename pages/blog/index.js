import React, { Component } from "react";
import Navbar from "../../components/Layouts/Navbar";
import Footer from "../../components/Layouts/Footer";
import Banner from "../../components/Blog/Banner";
import Blog from "../../components/Blog/Blog";

class Blog extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Blog />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog;
