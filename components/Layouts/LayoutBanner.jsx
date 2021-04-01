const LayoutBanner = ({ noBanner }) => {

    return (
        <section className="page-title-banner" style={!noBanner ? { willChange: "display"} : { display: "none", willChange: "display"} }>
            <div className="container" style={{ height: "66px" }}>
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

export default LayoutBanner;
