import { combineReducers } from "redux";
import {cakeReducer} from "./Redux/cake/CakeReducer"
import { bookReducer } from "./Redux/Books/BookReducer";
import { reducer } from "./Redux/user/userReducer";

const rootReducer=combineReducers({
    cake:cakeReducer,
    book:bookReducer,
    user:reducer,
})

export default rootReducer;