//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const ADD_SHIPPING = "ADD_SHIPPING";
export const ADD_QUANTITY_WITH_NUMBER = "ADD_QUANTITY_WITH_NUMBER";
export const ORDER_FORM = "ORDER_FORM";
export const CHECKOUT_CHARGE = "CHECKOUT_CHARGE";
export const RESET_CART = "RESET_CART";

//add cart action
export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id,
    };
};
//remove item action
export const removeItem = (id) => {
    return {
        type: REMOVE_ITEM,
        id,
    };
};
//subtract qt action
export const subtractQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id,
    };
};
//add qt action
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id,
    };
};

//add qt action with quantity number
export const addQuantityWithNumber = (id, qty) => {
    return {
        type: ADD_QUANTITY_WITH_NUMBER,
        id,
        qty,
    };
};

// Reset cart after form submit
export const resetCart = () => {
    return {
        type: RESET_CART,
    };
};
