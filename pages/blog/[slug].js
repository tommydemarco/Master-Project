import { connect } from "react-redux";
import { setBannerText } from "../../store/actions/bannerActions";
import { useBannerUpdate } from "../../utils/hooks";

import DetailsContent from "../../components/Blog/DetailsContent";

const BlogArticlePage = ({ setBannerText }) => {
    const bannerText = {
        title: null,
        subtitle: null,
    };
    useBannerUpdate(setBannerText, bannerText);

    return (
        <React.Fragment>
            <DetailsContent />
        </React.Fragment>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBannerText: (bannerText) => dispatch(setBannerText(bannerText)),
    };
};

export default connect(null, mapDispatchToProps)(BlogArticlePage);
