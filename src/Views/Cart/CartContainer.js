import { connect } from "react-redux";
import CartView from "./index";


const mapStoreToProps = state => ({
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStoreToProps, mapDispatchToProps)(CartView);
