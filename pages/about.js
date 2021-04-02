import { useContext, Fragment } from "react";
import { bannerContext } from "../context";
import { useBannerUpdate } from "../utils/hooks";

import Footer from "../components/Layouts/Footer";
import Banner from "../components/Banner";
import AboutContent from "../components/About/AboutContent";
import Team from "../components/About/Team";
import CtaCard from "../components/About/CtaCard";
import Feedback from "../components/About/Feedback";
import Partner from "../components/About/Partner";
import Platform from "../components/About/Platform";

const AboutPage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <Fragment>
            <Banner title="About us" subtitle="What makes us unique" />
            <AboutContent />
            <CtaCard />
            <Feedback />
        </Fragment>
    );
};

export default AboutPage;
