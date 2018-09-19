import { LOGIN } from "../ActionCreators/ActionCreators";
import { Auth } from "../../config";
const value = {
  authenticated: false
};
export default function LoginAction(email, password) {
  return dispatch => {
    Auth.signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        console.log(error);
      })
      .then(function(user) {
        if (user) {
          value.authenticated = true;
        }
        dispatch({
          type: LOGIN,
          value
        });
      });
  };
}
