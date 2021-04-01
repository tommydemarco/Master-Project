import { useContext, useEffect } from "react";
import { bannerContext } from "../context";

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

const HomePage = () => {
    const bannerText = {
        text: null,
        subtitle: null,
    };
    const { dispatch } = useContext(bannerContext);
    useEffect(() => {
        dispatch({ type: "SET_BANNER_TEXT", payload: bannerText });
    }, []);

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

export default HomePage;
