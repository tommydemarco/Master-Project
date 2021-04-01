import PropTypes from "prop-types";

const Banner = ({ title, subtitle }) => {

    return (
        <section className="page-title-banner" style={{ background: "transparent" }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>{title}</h2>
                        <span>{subtitle}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};

export default Banner;
