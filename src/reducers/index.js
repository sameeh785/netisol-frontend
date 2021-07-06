import {combineReducers} from "redux"
import {userReducer} from "./userReducer"
const store = combineReducers({
  user : userReducer
})
export default store