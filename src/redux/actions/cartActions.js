export const SET_CART_ITEMS = 'SET_CART_ITEMS';

export function setCartItems(cartItems) {
    return {
        type: SET_CART_ITEMS,
        payload: cartItems,
    };
}

