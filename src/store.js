import { createStore, compose, applyMiddleware } from "redux";
import Reducer from "./Component/Reducers/Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const allEnhancers = compose(
  applyMiddleware(thunk, logger),
);
const initialState = {
  authenticated:false
};
const store = createStore(Reducer, initialState, allEnhancers);
export default store;
