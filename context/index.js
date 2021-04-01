import { createContext, useReducer } from "react";

const bannerContext = createContext(null);

const INITIAL_STATE = {
    showBanner: false,
};

const bannerReducer = (state, action) => {
    switch (action.type) {
        case "SET_BANNER":
            return {
                showBanner: action.payload,
            };
        default:
            return state;
    }
};

const BannerContext = ({ children }) => {
    const [state, dispatch] = useReducer(bannerReducer, INITIAL_STATE);

    return (
        <bannerContext.Provider value={{ state, dispatch }}>
            {children}
        </bannerContext.Provider>
    );
};

export { bannerContext };

export default BannerContext;
