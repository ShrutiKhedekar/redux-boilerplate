import { combineReducers } from "redux";
import counterReducer from "./counter";
import isLoggedReducer from "./isLoggedin";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: isLoggedReducer,
});

export default rootReducer;
