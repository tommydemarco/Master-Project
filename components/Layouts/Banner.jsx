import PropTypes from "prop-types";

const Banner = ({ title, subtitle }) => {
    return (
        <section className="page-title-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>{title}</h2>
                        <span>{subtitle}</span>
                    </div>
                </div>
            </div>

            <div className="shape1"><img src='/images/shape1.png' alt="img" /></div>
            <div className="shape2"><img src='/images/shape2.png' alt="img" /></div>
            <div className="shape3"><img src='/images/shape3.png' alt="img" /></div>
            <div className="shape6"><img src='/images/shape6.png' alt="img" /></div>
            <div className="shape8 rotateme"><img src='/images/shape8.svg' alt="shape" /></div>
            <div className="shape9"><img src='/images/shape9.svg' alt="shape" /></div>
        </section>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Banner;
