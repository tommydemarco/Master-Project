import { useEffect } from "react";

const useBannerUpdate = (dispatch, bannerText) => {
    useEffect(() => {
        dispatch({ type: "SET_BANNER_TEXT", payload: bannerText });
    }, []);
};

export default useBannerUpdate;
