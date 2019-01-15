import { SIGNUP} from "../ActionCreators/ActionCreators";
import { Auth, db,storage } from "../../config";
const value = {
  SignUp: false,
  signuperr:null
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
          type: SIGNUP,
          value
        });
      }).catch(error =>{
        value.signuperr = error.message
        dispatch({
          type: SIGNUP,
          value
        });
      })
  };
}
export function setDefaultSignUp(){
  return dispatch =>{
    value.SignUp = false,
    value.signuperr =null

    dispatch({
      type: SIGNUP,
      value
    });
  }
}
export  function SignUpSellerAction(email, password, name, phone,companyName,yearofEstab,liscenceNo,staffNo,vatNo,companyAddr,aboutCompany,location,file,adminAdded = false) {
  return dispatch => {

    Auth.createUserWithEmailAndPassword(email, password).
    then(function(object){
      storage.ref("signUp/").child(email+'/').child(file.name).put(file).then(function(data){
        data.ref.getDownloadURL().
          then(downloadUrl =>{
          if(downloadUrl){
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
              aboutCompany:aboutCompany,
              location:location,
              url:downloadUrl
            };
            db.ref("users")
              .child(object.user.uid).child("details")
              .set(d);
              db.ref("users")
              .child(object.user.uid).child("type")
              .set("seller");
              adminAdded ? db.ref("AdminAdded").push(object.user.uid) : null
            value.SignUp = true;
          }
        })
      })
    })
      .then(function(userdata) {
        dispatch({
          type: SIGNUP,
          value
        });
      }).catch(error =>{
        value.signuperr = error.message,
        dispatch({
          type:SIGNUP,
          value
        })
      });
  };
}
