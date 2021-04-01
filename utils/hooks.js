import { useEffect } from "react";

export const useBannerUpdate = (actionCreator, bannerText) => {
    useEffect(() => {
        actionCreator(bannerText);
    }, []);
};
