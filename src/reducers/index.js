import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cart";
import { totalReducer } from "./total";

const store = combineReducers({
  user: userReducer,
  cart: cartReducer,
  total: totalReducer,
});
export default store;
