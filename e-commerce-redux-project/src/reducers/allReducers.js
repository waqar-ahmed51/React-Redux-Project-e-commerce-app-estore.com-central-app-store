import CartItemReducer from "./CartItem";
import totalCount from "./totalCount";
import { combineReducers } from "redux";

const allReducers=combineReducers({
    CartItem:CartItemReducer,
    totalCount:totalCount
}) 

export default allReducers;