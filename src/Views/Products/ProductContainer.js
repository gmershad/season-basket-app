import { connect } from "react-redux";
import ProductView from "./index";
import { setSelectedSeason } from '../../redux/actions/seasonActions';
import { setSelectedFilters, setSearchedItem } from '../../redux/actions/filterActions';
import { setCartItems } from "../../redux/actions/cartActions";
import { setWishListItems } from "../../redux/actions/wishListAction";
import { getCatalog } from "../../redux/actions/catalogActions"

const mapStoreToProps = state => ({
    selectedSeason: state.season.selectedSeason,
    selectedFilters: state.filter.selectedFilters,
    searchedItems: state.filter.searchedItems,
    cartItems: state.cart.cartItems,
    wishListItems: state.wishList.wishListItems,
    catalog: state.catalog.catalog
});


const mapDispatchToProps = dispatch => ({
    setSelectedSeason,
    setSelectedFilters,
    setSearchedItem,
    setCartItems: (cartItems) => dispatch(setCartItems(cartItems)),
    setWishListItems: (wishListItems) => dispatch(setWishListItems(wishListItems)),
    getCatalog: (page, pageSize, seasonId) => dispatch(getCatalog(page, pageSize, seasonId)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProductView);
