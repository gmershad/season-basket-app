export const SET_CART_ITEMS = 'SET_CART_ITEMS';

const initialState = {
    cartItems: [],
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case SET_CART_ITEMS:
            return {
                ...state,
                cartItems: action.payload,
            };
        default:
            return state;
    }
}


