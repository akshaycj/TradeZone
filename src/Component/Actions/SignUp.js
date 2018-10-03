import { SIGNUP } from "../ActionCreators/ActionCreators";
import { Auth, db } from "../../config";
const value = {
  SignUp: false
};
export default function SingUpAction(email, password, name, phone) {
  return dispatch => {
    Auth.createUserWithEmailAndPassword(email, password)
      .then(function(object) {
        var d = {
          name: name,
          email: email,
          phone: phone
        };
        db.ref("usersDetails")
          .child(object.user.uid)
          .set(d);
        value.SignUp = true;
      })
      .then(function(userdata) {
        dispatch({
          type: SIGNUP,
          value
        });
      });
  };
}
