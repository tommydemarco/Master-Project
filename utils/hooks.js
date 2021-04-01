import { useEffect, useState } from "react";

export const useBannerUpdate = (dispatch, bannerText) => {
    const [secondRender, setSecondRender] = useState(false);
    useEffect(() => {
        setSecondRender(true);
    }, []);
    (() => {
        if (secondRender) return;
        dispatch({ type: "SET_BANNER_TEXT", payload: bannerText });
    })();
};
