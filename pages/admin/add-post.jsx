import { useContext } from "react";
import { bannerContext } from "../../context";
import { useBannerUpdate } from "../../utils/hooks";

import Banner from "../../components/Banner"
import PostForm from "../../components/PostForm"

const AddPostPage = () => {
    const { dispatch } = useContext(bannerContext);
    useBannerUpdate(dispatch, true);

    return (
        <>
           <Banner title="Add a new post" subtitle="Use this form to add a new post" />
           <PostForm />
        </>
    )
}

export default AddPostPage  