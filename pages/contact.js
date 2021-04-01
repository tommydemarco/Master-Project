import Navbar from "../components/Layouts/Navbar";
import Footer from "../components/Layouts/Footer";
import Banner from "../components/Banner/";
import Content from "../components/ContactUs/Content";
import Form from "../components/ContactUs/Form";

const Contact = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="Get in touch with us"
                subtitle="Anything On your Mind. We’ll Be Glad To Assist You!"
            />
            <Form />
            <Content />
            <Footer />
        </>
    );
};

export default Contact;
