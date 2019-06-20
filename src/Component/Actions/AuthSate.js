import { AUTHSTATE } from "../ActionCreators/ActionCreators";
import { Auth } from "../../config";
export default function AuthStateAction() {
  var user = null
  return dispatch => {
    Auth.onAuthStateChanged(function (userdec) {
      if (userdec) {
        console.log("userdc", userdec)
        user = userdec
        dispatch({
          type: AUTHSTATE,
          user
        });
      }
      else {
        dispatch({
          type: AUTHSTATE,
          user
        });
      }
    });
  };
}
