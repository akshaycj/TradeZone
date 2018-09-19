import { createStore, compose, applyMiddleware } from "redux";
import Reducer from "./Component/Reducers/Reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";
const allEnhancers = compose(
  applyMiddleware(thunk, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const initialState = {};
const store = createStore(Reducer, initialState, allEnhancers);
export default store;
