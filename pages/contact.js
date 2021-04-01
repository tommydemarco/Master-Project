import { useContext } from "react";
import { bannerContext } from "../context";
import { useBannerUpdate } from "../utils/hooks";

import Content from "../components/ContactUs/Content";
import Form from "../components/ContactUs/Form";

const Contact = () => {
    const bannerText = {
        title: "Get in touch with us",
        subtitle: "Anything On your Mind. We’ll Be Glad To Assist You!",
    };
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, bannerText);

    return (
        <>
            <Form />
            <Content />
        </>
    );
};

export default Contact;
