import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import DetailsContent from "../../components/Blog/DetailsContent";

const BlogArticlePage = () => {
    const bannerText = {
        title: null,
        subtitle: null,
    };
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, bannerText);

    return (
        <React.Fragment>
            <DetailsContent />
        </React.Fragment>
    );
};

export default BlogArticlePage;
