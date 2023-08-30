export const SET_WISHLIST_ITEMS = 'SET_WISHLIST_ITEMS';

const initialState = {
    wishListItems: [],
};

export default function wishListReducer(state = initialState, action) {
    switch (action.type) {
        case SET_WISHLIST_ITEMS:
            return {
                ...state,
                wishListItems: action.payload,
            };
        default:
            return state;
    }
}


