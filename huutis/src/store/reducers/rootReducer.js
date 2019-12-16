import postReducer from "./postReducer";
import authReducer from "./authReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  post: postReducer
});

export default rootReducer;
