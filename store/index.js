import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";

import { cartReducer } from "./reducers/cartReducer";
import { bannerReducer } from "./reducers/bannerReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    banner: bannerReducer,
});

export const initStore = () => {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
};
