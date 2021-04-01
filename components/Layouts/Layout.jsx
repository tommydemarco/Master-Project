import React from 'react'
import PropTypes from 'prop-types'

import { connect } from "react-redux"

import Navbar from "./Navbar"
import Banner from "./Banner"
import Footer from "./Footer"
import SearchForm from "./SearchForm"
import SideDrawer from "./SideDrawer"

const Layout = ({ children, bannerTitle, bannerSubtitle }) => {

    const noBanner = !bannerTitle && !bannerSubtitle
    return (
        <>
            <Navbar noBanner={noBanner} />
            {noBanner && <div className="navbar-placeholder"></div>}
            {!noBanner && <Banner title={bannerTitle} subtitle={bannerSubtitle} />}
            {children}
            <Footer />
            {/* <SearchForm /> */}
            {/* <SideDrawer /> */}
        </>
    )
}

Layout.propTypes = {

}

const mapStateToProps = state => {
    return {
        bannerTitle: state.banner.title,
        bannerSubtitle: state.banner.subtitle
    }
}

export default connect(mapStateToProps)(Layout);
