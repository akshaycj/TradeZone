import { createStore, compose, applyMiddleware } from "redux";
import Reducer from "./Component/Reducers/Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const allEnhancers = compose(
  applyMiddleware(thunk, logger),
);
const initialState = {
  authenticated:false,
  signup:false,
  err:null,
  signuperr:null,urls:[]
};
const store = createStore(Reducer, initialState, allEnhancers);
export default store;
