import { connect } from "react-redux";
import CartView from "./index";
import { setCartItems } from "../../redux/actions/cartActions"

const mapStoreToProps = state => ({
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
    setCartItems: (cartItems) => dispatch(setCartItems(cartItems))
});

export default connect(mapStoreToProps, mapDispatchToProps)(CartView);
