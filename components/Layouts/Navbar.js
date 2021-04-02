import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import Link from "../../utils/ActiveLink";
import SideDrawer from "./SideDrawer";
import SearchForm from "./SearchForm";

const Navbar = ({ products, router, noBanner }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        return () => {
            setIsMounted(false);
        };
    }, []);

    const [drawer, setDrawer] = useState(false);
    const [searchForm, setSearchForm] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    const handleDrawer = () => {
        setDrawer(!drawer);
    };

    const handleSearchForm = () => {
        setSearchForm(!searchForm);
    };

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        let scrollY = 0;
        document.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                elementId.classList.add("is-sticky");
            } else if (window.scrollY === 0) {
                elementId.classList.remove("is-sticky");
            }
            scrollY = window.scrollY;
        });
        window.scrollTo(0, 0);
    });

    let { pathname } = router;

    let layOutCls = "";
    let logo = "/images/logo.png";
    if (pathname == "/digital-marketing") {
        layOutCls = "marketing-navbar";
        logo = "/images/logo2.png";
    }

    const classOne = collapsed
        ? "collapse navbar-collapse"
        : "collapse navbar-collapse show";
    const classTwo = collapsed
        ? "navbar-toggler navbar-toggler-right collapsed"
        : "navbar-toggler navbar-toggler-right";

    const navbarClasses = [`crake-nav ${layOutCls}`];
    if (noBanner) navbarClasses.push("crake-nav--no-banner");

    return (
        <React.Fragment>
            <header id="header">
                <div id="navbar" className={navbarClasses.join(" ")}>
                    <div className="container">
                        <nav className="navbar navbar-expand-md navbar-light">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img src={logo} alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div
                                className={classOne}
                                id="navbarSupportedContent"
                            >
                                <ul className="navbar-nav nav ms-auto">
                                    <li className="nav-item">
                                        <Link
                                            activeClassName="active"
                                            href="/shop"
                                        >
                                            <a className="nav-link">Shop</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            activeClassName="active"
                                            href="/blog"
                                        >
                                            <a className="nav-link">Blog</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            activeClassName="active"
                                            href="/contact-us"
                                        >
                                            <a className="nav-link">
                                                Contact us
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link
                                            activeClassName="active"
                                            href="/about"
                                        >
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="ms-auto others-option">
                                <ul className="navbar-nav">
                                    <li className="nav-item cart-wrapper">
                                        <Link
                                            activeClassName="active"
                                            href="/cart"
                                        >
                                            <a>
                                                <i className="icofont-shopping-cart cart-icon"></i>

                                                <span>{products.length}</span>
                                            </a>
                                        </Link>
                                    </li>

                                    <li className="header-search-box">
                                        <Link
                                            activeClassName="active"
                                            href="/#"
                                        >
                                            <a
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleSearchForm();
                                                }}
                                                title="Search"
                                            >
                                                <i className="icofont-search-2"></i>
                                            </a>
                                        </Link>
                                    </li>

                                    <li onClick={handleDrawer}>
                                        <div className="side-menu">
                                            <span className="bar-1"></span>
                                            <span className="bar-2"></span>
                                            <span className="bar-3"></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            {drawer ? <SideDrawer onClick={handleDrawer} /> : ""}
            {searchForm ? <SearchForm onClick={handleSearchForm} /> : ""}
        </React.Fragment>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.cart.addedItems,
    };
};

export default withRouter(connect(mapStateToProps)(Navbar));
