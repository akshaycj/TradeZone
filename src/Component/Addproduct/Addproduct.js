import React, { Component } from "react";
import { Input, Select, Upload, Icon, Modal, Button } from "antd";
import "./Addproduct.css";
import PicturesWall from "./Upload";
import { storage } from "../../config.js";
const Option = Select.Option;

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dat: [],
      productName: "",
      category: "",
      description: ""
    };
  }
  getdata(data) {
    var that = this;
    var dat = [];
    console.log(data);

    data.forEach(function(anc) {
      console.log(anc.originFileObj);
      that.setState({ dat: anc.originFileObj });
    });

    console.log(dat);
  }

  onSubmit() {
    console.log(this.state);
    storage
      .ref("products/")
      .child(this.state.productName + "/")
      .child(this.state.dat.name)
      .put(this.state.dat)
      .then(function(data) {
        // console.log("upload Complete",data.ref.getDownloadURL())
        data.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
        });
      });
  }

  render() {
    return (
      <div>
        <div className="addproduct">
          <div className="productdetails">
            <h1>Add Product</h1>
            <Input
              placeholder="Product Name"
              onChange={e => {
                this.setState({ productName: e.target.value });
              }}
              style={{ width: "70%" }}
            />
            <Select
              placeholder="Select Category"
              onChange={value => {
                this.setState({ category: value });
              }}
              style={{ width: "70%" }}
            >
              <Option value="Electronics">Electronics</Option>
              <Option value="Home">Home</Option>
              <Option value="Mens">Mens</Option>
              <Option value="Women">Women</Option>
            </Select>
            <Input.TextArea
              placeholder="Product description"
              onChange={a => {
                this.setState({ description: a.target.value });
              }}
            />
          </div>
          <div className="productpics">
            <h1>Upload pics</h1>
            <PicturesWall value={this.getdata.bind(this)} />
          </div>
        </div>
        <Button
          type="primary"
          style={{ alignSelf: "flex-end", margin: "4px" }}
          onClick={this.onSubmit.bind(this)}
        >
          Add Product
        </Button>
        <Button type="default" style={{ alignSelf: "flex-end", margin: "4px" }}>
          Cancel
        </Button>
      </div>
    );
  }
}
