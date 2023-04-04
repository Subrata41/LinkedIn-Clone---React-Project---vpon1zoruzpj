import { combineReducers } from "redux";
import articlesReducer from "./articleReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articlesReducer,
});

export default rootReducer;
