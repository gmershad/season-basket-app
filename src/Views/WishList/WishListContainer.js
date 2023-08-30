import { connect } from "react-redux";
import WishListView from "./index"
import { setWishListItems } from "../../redux/actions/wishListAction";
import { setCartItems } from "../../redux/actions/cartActions";

const mapStoreToProps = state => ({
    wishListItems: state.wishList.wishListItems,
    cartItems: state.cart.cartItems,
});

const mapDispatchToProps = dispatch => ({
    setCartItems: (cartItems) => dispatch(setCartItems(cartItems)),
    setWishListItems: (wishListItems) => dispatch(setWishListItems(wishListItems))
});

export default connect(mapStoreToProps, mapDispatchToProps)(WishListView);
