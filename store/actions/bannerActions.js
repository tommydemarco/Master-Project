export const SET_BANNER_TEXT = "SET_BANNER_TEXT";

export const setBannerText = (payload) => {
    return {
        type: SET_BANNER_TEXT,
        payload,
    };
};
