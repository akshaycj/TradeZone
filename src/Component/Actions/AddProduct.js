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
  tags,
  description,
  price,
  color,
  areaofusage,
  specififcation,
  weight,
  searchName
) {
  var length = 0;
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
        .then(function (data) {
          data.ref
            .getDownloadURL()
            .then(function (downloadURL) {
              value.urls.push(downloadURL);
            })
            .then(function (data) {
              length = length + 1
              db.ref("users")
                .child(uid).child("products")
                .child(path)
                .set({
                  productName,
                  urls: value.urls,
                  category,
                  tags,
                  description,
                  price,
                  color,
                  areaofusage,
                  specififcation,
                  weight,
                  searchName: productName.toLowerCase()
                });
              db.ref("products")
                .child(path)
                .set({
                  productName,
                  urls: value.urls,
                  category,
                  tags,
                  description,
                  price,
                  color,
                  areaofusage,
                  specififcation,
                  weight,
                  searchName: productName.toLowerCase(),
                  seller: uid
                });
            });
        });
    });
    if (length !== pics.length) {

      dispatch({
        type: ADDPRODUCT,
        value
      });
    }
  };
}
