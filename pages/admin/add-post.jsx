import PropTypes from 'prop-types'

import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import Banner from "../../components/Banner"

const addPost = props => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <>
           <Banner title="Add a new post" subtitle="Use this form to add a new post" />
        </>
    )
}

addPost.propTypes = {

}

export default addPost  