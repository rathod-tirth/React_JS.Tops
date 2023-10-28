import { combineReducers } from "redux";
import userReducer from "../Feature/userReducer";

const rootreducer = combineReducers({
   user: userReducer
});

export default rootreducer;