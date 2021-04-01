import React from 'react'
import PropTypes from 'prop-types'

import { useContext } from "react";
import { bannerContext } from "../../context";

import Navbar from "./Navbar"
import Banner from "./Banner"
import Footer from "./Footer"
import SearchForm from "./SearchForm"
import SideDrawer from "./SideDrawer"

const Layout = ({ children }) => {

    const { state } = useContext(bannerContext)

    const noBanner = !state.title && !state.subtitle

    return (
        <>
            <Navbar noBanner={noBanner} />
            {noBanner && <div className="navbar-placeholder"></div>}
            {<Banner title={state.title} subtitle={state.subtitle} style={noBanner ? { display: "none"} : {} } noBanner={noBanner}/>}
            {children}
            <Footer />
            {/* <SearchForm /> */}
            {/* <SideDrawer /> */}
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}


export default Layout;
