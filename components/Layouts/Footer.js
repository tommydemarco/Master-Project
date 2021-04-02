import Link from "next/link";

const Footer = () => {
    return (
        <footer className="footer-area pb-0 bg-image">
            <div className="copyright-area">
                <div className="container">
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Copyright &copy; 2021 Mojosa. All rights
                                reserved
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link href="/contact-us">
                                        <a>Contact us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Terms & Conditions</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Privacy Policy</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
