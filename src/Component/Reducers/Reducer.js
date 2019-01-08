import {
  LOGIN,
  SIGNUP,
  ADDPRODUCT,
  AUTHSTATE,
  SIGN_OUT
} from "../ActionCreators/ActionCreators";

const initialState = {
  
};
export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authenticated: action.value.authenticated,
        err:action.value.err
      };
      case SIGNUP:
      return {
        ...state,
        signuperr:action.value.signuperr,
        signup: action.value.SignUp
      };
      case SIGN_OUT:
      return {
        ...state,
        authenticated:action.value.authenticated
      }
    case ADDPRODUCT:
      return {
        ...state,
        urls: action.value.urls
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
