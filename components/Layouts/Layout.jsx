import React from 'react'
import PropTypes from 'prop-types'

import Navbar from "./Navbar"
import Banner from "./Banner"
import Footer from "./Footer"
import SearchForm from "./SearchForm"
import SideDrawer from "./SideDrawer"

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Banner />
            {children}
            <Footer />
            {/* <SearchForm /> */}
            {/* <SideDrawer /> */}
        </>
    )
}

Layout.propTypes = {

}

export default Layout
