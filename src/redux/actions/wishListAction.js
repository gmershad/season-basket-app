export const SET_WISHLIST_ITEMS = 'SET_WISHLIST_ITEMS';

export function setWishListItems(wishListItems) {
    return {
        type: SET_WISHLIST_ITEMS,
        payload: wishListItems,
    };
}

