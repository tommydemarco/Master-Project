import PropTypes from "prop-types";

const Banner = ({ title, subtitle }) => {
  return (
    <section
      className="page-title-banner"
      style={{ background: "transparent" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>{title}</h1>
            <span>{subtitle}</span>
            {/* <div className="bar bar--white"></div> */}
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
