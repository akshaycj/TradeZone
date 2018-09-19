import { AUTHSTATE } from "../ActionCreators/ActionCreators";
import { Auth } from "../../config";
export default function AuthStateAction() {
  return dispatch => {
    Auth.onAuthStateChanged(function(user) {
      if (user) {
        dispatch({
          type: AUTHSTATE,
          user
        });
      }
    });
  };
}
