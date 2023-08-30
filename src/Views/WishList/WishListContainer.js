import { connect } from "react-redux";
import WishListView from "./index"
import { setWishListItems } from "../../redux/actions/wishListAction";

const mapStoreToProps = state => ({
    wishListItems: state.wishList.wishListItems
});

const mapDispatchToProps = dispatch => ({
    setWishListItems: (wishListItems) => dispatch(setWishListItems(wishListItems))
});

export default connect(mapStoreToProps, mapDispatchToProps)(WishListView);
