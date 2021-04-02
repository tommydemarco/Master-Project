import React from 'react'
import PropTypes from 'prop-types'

import { useContext } from "react";
import { bannerContext } from "../../context";

import Navbar from "./Navbar"
import LayoutBanner from "./LayoutBanner"
import Footer from "./Footer"
import SideDrawer from "./SideDrawer"

const Layout = ({ children }) => {

    const { state } = useContext(bannerContext)

    return (
        <>
            <Navbar noBanner={!state.showBanner} />
            <div style={!state.showBanner ? { display: "none"} : {} } className="navbar-placeholder"></div>
            {<LayoutBanner noBanner={state.showBanner}/>}
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
