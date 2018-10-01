import React, { Component } from "react";
import "./index.css";
import { db } from "../../../config";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    db.ref("users")
      .child("aYjX8BD4w5SADTlnTQB3pl13HKJ2")
      .on(
        "value",
        function(dataSnap) {
          var data = [];
          dataSnap.forEach(element => {
            data.push(element.val());
          });

          this.setState({ products: data });
        }.bind(this)
      );
  }
  render() {
    return <div />;
  }
}
