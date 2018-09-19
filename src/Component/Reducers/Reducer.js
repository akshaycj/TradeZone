import {
  LOGIN,
  SIGNUP,
  ADDPRODUCT,
  AUTHSTATE
} from "../ActionCreators/ActionCreators";

const initialState = {};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        data: action.value.authenticated
      };
    case SIGNUP:
      return {
        ...state,
        signup: action.value.SignUp
      };
    case ADDPRODUCT:
      return {
        ...state,
        data: action.value
      };
    case AUTHSTATE:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
