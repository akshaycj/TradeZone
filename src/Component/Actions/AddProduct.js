import { ADDPRODUCT } from "../ActionCreators/ActionCreators";
import { storage, db } from "../../config";

const value = {
  urls: []
};
export default function AddProductAction(pics, productName) {
  return dispatch => {
    pics.forEach(a => {
      storage
        .ref("products/")
        .child(productName + "/")
        .child(a.originFileObj.name)
        .put(a.originFileObj)
        .then(function(data) {
          data.ref.getDownloadURL().then(function(downloadURL) {
            console.log("ASdasd", downloadURL);
            value.urls.push(downloadURL);
          });
        });
    });
    dispatch({
      type: ADDPRODUCT,
      value
    });
  };
}
