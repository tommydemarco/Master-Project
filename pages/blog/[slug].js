import { useContext } from "react";
import { bannerContext } from "../../context";
import useBannerUpdate from "../../hooks/useBannerUpdate";

import DetailsContent from "../../components/Blog/DetailsContent";

const BlogArticlePage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, false);

    return (
        <React.Fragment>
            <DetailsContent />
        </React.Fragment>
    );
};

export default BlogArticlePage;
