import { SIGNUP_USER,SIGNUP_SELLER } from "../ActionCreators/ActionCreators";
import { Auth, db } from "../../config";
const value = {
  SignUp: false
};
export function SignUpUserAction(email, password, name, phone) {
  return dispatch => {
    Auth.createUserWithEmailAndPassword(email, password)
      .then(function(object) {
        var d = {
          name: name,
          email: email,
          phone: phone,
          type:"user"
        };
        db.ref("users")
          .child(object.user.uid).child("details")
          .set(d);
          db.ref("users")
          .child(object.user.uid).child("type")
          .set("user");
        value.SignUp = true;
      })
      .then(function(userdata) {
        dispatch({
          type: SIGNUP_USER,
          value
        });
      });
  };
}
export  function SignUpSellerAction(email, password, name, phone,companyName,yearofEstab,liscenceNo,staffNo,vatNo,companyAddr,aboutCompany) {
  console.log(email)
  return dispatch => {
    Auth.createUserWithEmailAndPassword(email, password)
      .then(function(object) {
        var d = {
          name: name,
          email: email,
          phone: phone,
          companyName:companyName,
          yearofEstab:yearofEstab,
          liscenceNo:liscenceNo,
          staffNo:staffNo,
          vatNo:vatNo,
          companyAddr:companyAddr,
          aboutCompany:aboutCompany
        };
        db.ref("users")
          .child(object.user.uid).child("details")
          .set(d);
          db.ref("users")
          .child(object.user.uid).child("type")
          .set("seller");
          
        value.SignUp = true;
      })
      .then(function(userdata) {
        dispatch({
          type: SIGNUP_SELLER,
          value
        });
      });
  };
}
