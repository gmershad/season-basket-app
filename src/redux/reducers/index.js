import { combineReducers } from "redux";
import seasonReducer from "./seasonReducer";
import filterReducer from "./filterReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
    season: seasonReducer,
    filter: filterReducer,
    cart: cartReducer
});
