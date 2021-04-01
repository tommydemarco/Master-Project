import { SET_BANNER_TEXT } from "../actions/bannerActions";

const INITIAL_STATE = {
    title: null,
    subtitle: null,
};

export const bannerReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_BANNER_TEXT:
            return {
                ...state,
                title: action.payload.title,
                subtitle: action.payload.subtitle,
            };
        default:
            return state;
    }
};
