import { LOGIN, SIGNUP, ADDPRODUCT } from "../ActionCreators/ActionCreators";

const initialState = {};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.value
      };
    case SIGNUP:
      return {
        ...state,
        data: action.value
      };
    case ADDPRODUCT:
      return {
        ...state,
        data: action.value
      };
    default:
      return state;
  }
}
