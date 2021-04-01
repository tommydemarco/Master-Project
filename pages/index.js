import { connect } from "react-redux";
import { setBannerText } from "../store/actions/bannerActions";
import { useBannerUpdate } from "../utils/hooks";

import Banner from "../components/Saas/Banner";
import Features from "../components/Saas/Features";
import Overview from "../components/Saas/Overview";
import JoinCard from "../components/Saas/JoinCard";
import CtaCard from "../components/Saas/CtaCard";
import SaasTools from "../components/Saas/SaasTools";
import Funfact from "../components/Saas/Funfact";
import WorkProcess from "../components/Saas/WorkProcess";
import PricingPlan from "../components/Saas/PricingPlan";
import GetStarted from "../components/Saas/GetStarted";
import Feedback from "../components/Saas/Feedback";
import Partner from "../components/Saas/Partner";

const HomePage = ({ setBannerText }) => {
    const bannerText = {
        title: null,
        subtitle: null,
    };
    useBannerUpdate(setBannerText, bannerText);

    return (
        <React.Fragment>
            <Banner />
            <Features />
            <Overview />
            <JoinCard />
            <CtaCard />
            <SaasTools />
            <Funfact />
            <WorkProcess />
            <PricingPlan />
            <GetStarted />
            <Feedback />
            <Partner />
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBannerText: (bannerText) => dispatch(setBannerText(bannerText)),
    };
};

export default connect(null, mapDispatchToProps)(HomePage);
