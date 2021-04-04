import "../public/css/bootstrap.min.css";
import "../public/css/icofont.min.css";
import "../public/css/animate.css";
import "../node_modules/react-modal-video/scss/modal-video.scss";
import "react-image-lightbox/style.css";
import "react-accessible-accordion/dist/fancy-example.css";
import "../public/css/style.css";
import "../public/css/responsive.css";

import { Provider } from "react-redux";
import { Preloader, Placeholder } from "react-preloading-screen";
import Head from "next/head";
import withRedux from "next-redux-wrapper";
import { initStore } from "../store";
import BannerContext from "../context";

import Layout from "../components/Layouts";
import Loader from "../components/Shared/Loader";

const MyApp = ({ Component, pageProps, store }) => {
    return (
        <React.Fragment>
            <Head>
                <title>GadJS - Javascript Gadjets</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta
                    name="description"
                    content="Mojosa - React Next Landing Page Templates"
                />
                <meta
                    name="og:title"
                    property="og:title"
                    content="Mojosa - React Next Landing Page Templates"
                ></meta>
                <meta
                    name="twitter:card"
                    content="Mojosa - React Next Landing Page Templates"
                ></meta>
            </Head>

            <Preloader>
                <Provider store={store}>
                    <BannerContext>
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </BannerContext>
                </Provider>

                <Placeholder>
                    <Loader />
                </Placeholder>
            </Preloader>
        </React.Fragment>
    );
};
export default withRedux(initStore)(MyApp);
