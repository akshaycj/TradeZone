import { LOGIN ,SIGN_OUT} from "../ActionCreators/ActionCreators";
import { Auth } from "../../config";
import AuthStateAction from './AuthSate';
const value = {
  authenticated: false,
  err:null
};
export function LoginAction(email, password) {
  return dispatch => {
    Auth.signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(error);
        value.err = error.message
        dispatch({
          type: LOGIN,
          value
        });
      })
      .then(function(user) {
        if (user) {
          value.authenticated = true;
        }
        dispatch({
          type: LOGIN,
          value
        });
      })
  };
}
export function setDefault(){
  return dispatch =>{
    value.authenticated = false,
    value.err =null

    dispatch({
      type: LOGIN,
      value
    });
  }
}
export function SignOut(){
  return dispatch =>{
    Auth.signOut()
      .then(function() {

        value.authenticated = false
        // Sign-out successful.
      dispatch({
        type:SIGN_OUT,
        value,
      })

      })
      .catch(function(error) {
        console.log(error)
        value.err = error
        dispatch({
          type:SIGN_OUT,
          value,
        })
      });
  }
}