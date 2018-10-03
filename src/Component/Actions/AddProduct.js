import { ADDPRODUCT } from "../ActionCreators/ActionCreators";
import { storage, db } from "../../config";

const value = {
  urls: []
};

export default function AddProductAction(
  pics,
  productName,
  uid,
  category,
  tags
) {
  const path = db
    .ref("users")
    .child(uid)
    .push().key;
  return dispatch => {
    pics.forEach(a => {
      storage
        .ref("products/")
        .child(productName + "/")
        .child(a.originFileObj.name)
        .put(a.originFileObj)
        .then(function(data) {
          data.ref
            .getDownloadURL()
            .then(function(downloadURL) {
              console.log("ASdasd", downloadURL);
              value.urls.push(downloadURL);
            })
            .then(function(data) {
              db.ref("users")
                .child(uid)
                .child(path)
                .set({
                  productName,
                  urls: value.urls,
                  category,
                  tags
                });
              db.ref("products")
                .child(path)
                .set({
                  productName,
                  urls: value.urls,
                  category,
                  tags
                });
            });
        });
    });
    dispatch({
      type: ADDPRODUCT,
      value
    });
  };
}
