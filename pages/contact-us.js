import { useContext } from "react";
import { bannerContext } from "../context";
import { useBannerUpdate } from "../utils/hooks";

import Banner from "../components/Banner";
import Content from "../components/ContactUs/Content";
import Form from "../components/ContactForm";

const ContactUsPage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <>
            <Banner
                title="Get in touch with us"
                subtitle="Anything On your Mind. We’ll Be Glad To Assist You!"
            />
            <Form />
            <Content />
        </>
    );
};

export default ContactUsPage;
