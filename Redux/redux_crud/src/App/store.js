import { createStore } from "redux";
import rootreducer from "./RootReducer";

const store = createStore(rootreducer);

export default store;