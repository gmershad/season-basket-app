import { combineReducers } from "redux";
import seasonReducer from "./seasonReducer";
import filterReducer from "./filterReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";

export default combineReducers({
    season: seasonReducer,
    filter: filterReducer,
    cart: cartReducer,
    wishList: wishListReducer
});
