import { combineReducers } from "redux";
import seasonReducer from "./seasonReducer";
import filterReducer from "./filterReducer";
import cartReducer from "./cartReducer";
import wishListReducer from "./wishListReducer";
import catalogReducer from "./catalogReducer";

export default combineReducers({
    season: seasonReducer,
    filter: filterReducer,
    cart: cartReducer,
    wishList: wishListReducer,
    catalog: catalogReducer
});
