import { useContext } from "react";
import { bannerContext } from "../context";
import useBannerUpdate from "../hooks/useBannerUpdate";

import Banner from "../components/Banner";
import ContactCards from "../components/ContactCards";
import ContactForm from "../components/ContactForm";

const ContactUsPage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <>
            <Banner
                title="Get in touch with us"
                subtitle="Anything On your Mind. We’ll Be Glad To Assist You!"
            />
            <ContactForm />
            <ContactCards />
        </>
    );
};

export default ContactUsPage;
