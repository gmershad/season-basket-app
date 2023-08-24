import { combineReducers } from "redux";
import seasonReducer from "./seasonReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
    season: seasonReducer,
    filter: filterReducer
});
