import { reducer as formReducer } from "redux-form";
import { createStore, combineReducers, applyMiddleware } from "redux";
import searchReducer from "./search";

export default combineReducers({
  form: formReducer,
  search: searchReducer
});
