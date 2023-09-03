import { connect } from "react-redux";
import ProductDetail from ".";
import { getProductDetail } from "../../../redux/actions/catalogActions";

const mapStoreToProps = (state) => ({
    catalogDetail: state.catalog.catalogDetail
});

const mapDispatchToProps = (dispatch) => ({
    getProductDetail: (productId) => dispatch(getProductDetail(productId)),
});

export default connect(mapStoreToProps, mapDispatchToProps)(ProductDetail);
