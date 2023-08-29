import { connect } from "react-redux";
import ProductView from "./index";
import { setSelectedSeason } from '../../redux/actions/seasonActions';
import { setSelectedFilters, setSearchedItem } from '../../redux/actions/filterActions';
import { setCartItems } from "../../redux/actions/cartActions";

const mapStoreToProps = state => ({
    selectedSeason: state.season.selectedSeason,
    selectedFilters: state.filter.selectedFilters,
    searchedItems: state.filter.searchedItems,
    cartItems: state.cart.cartItems
});


const mapDispatchToProps = dispatch => ({
    setSelectedSeason,
    setSelectedFilters,
    setSearchedItem,
    setCartItems: (cartItems) => dispatch(setCartItems(cartItems))
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProductView);
