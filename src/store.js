import { createStore, compose, applyMiddleware } from "redux";
import Reducer from "./Component/Reducers/Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const allEnhancers = compose(
  applyMiddleware(thunk),
);
const initialState = {
  authenticated: false,
  signup: false,
  err: null,
  signuperr: null,
  user: null
};
const store = createStore(Reducer, initialState, allEnhancers);
export default store;
