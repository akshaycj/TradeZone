import React, { Component } from "react";
import { Input, Select, Upload, Icon, Modal, Button, Tag, Tooltip } from "antd";
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
      description: "",
      tags: [],
      inputVisible: false,
      inputValue: ""
    };
  }

  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    console.log(tags);
    this.setState({ tags });
  };

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleInputConfirm = () => {
    const state = this.state;
    const inputValue = state.inputValue;
    let tags = state.tags;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      tags = [...tags, inputValue];
    }
    console.log(tags);
    this.setState({
      tags,
      inputVisible: false,
      inputValue: ""
    });
  };

  saveInputRef = input => (this.input = input);

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
        console.log("upload Complete", data.ref.getDownloadURL());
        data.ref.getDownloadURL().then(function(downloadURL) {
          console.log("File available at", downloadURL);
        });
      });
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        <h1>Add Product</h1>
        <div className="add-main">
          <Input
            placeholder="Product Name"
            onChange={e => {
              this.setState({ productName: e.target.value });
            }}
            style={{ margin: 10 }}
          />
          <Select
            placeholder="Select Category"
            onChange={value => {
              this.setState({ category: value });
            }}
            style={{ width: "100%", margin: 10 }}
          >
            <Option value="Electronics">Electronics</Option>
            <Option value="Home">Home</Option>
            <Option value="Mens">Mens</Option>
            <Option value="Women">Women</Option>
          </Select>
          <Input.TextArea
            style={{ margin: 10 }}
            placeholder="Product description"
            onChange={a => {
              this.setState({ description: a.target.value });
            }}
          />
          <div
            style={{
              display: "flex",
              marginRight: "auto",
              marginTop: 10,
              flexWrap: "wrap",
              padding: 5
            }}
          >
            <span style={{ marginRight: 5 }}>Tags:</span>
            {tags.map((tag, index) => {
              const isLongTag = tag.length > 20;
              const tagElem = (
                <Tag
                  style={{ marginBottom: 5 }}
                  color="#2db7f5"
                  key={tag}
                  closable={true}
                  afterClose={() => this.handleClose(tag)}
                >
                  {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                </Tag>
              );
              return isLongTag ? (
                <Tooltip title={tag} key={tag}>
                  {tagElem}
                </Tooltip>
              ) : (
                tagElem
              );
            })}
            {inputVisible && (
              <Input
                ref={this.saveInputRef}
                type="text"
                size="small"
                style={{ width: 78 }}
                value={inputValue}
                onChange={this.handleInputChange}
                onBlur={this.handleInputConfirm}
                onPressEnter={this.handleInputConfirm}
              />
            )}
            {!inputVisible && (
              <Tag
                onClick={this.showInput}
                style={{ background: "#fff", borderStyle: "dashed" }}
              >
                <Icon type="plus" /> New Tag
              </Tag>
            )}
          </div>
          <div style={{ marginTop: 10 }}>
            <PicturesWall value={this.getdata.bind(this)} />
          </div>

          <div
            className="common-button app-accent"
            style={{ marginTop: "auto" }}
          >
            + Add
          </div>
        </div>
      </div>
    );
    //  return (
    //    <div>
    //      <div className="addproduct">
    //        <div className="productdetails">
    // <h1>Add Product</h1>
    // <Input
    //   placeholder="Product Name"
    //   onChange={e => {
    //     this.setState({ productName: e.target.value });
    //   }}
    //   style={{ width: "70%" }}
    // />
    // <Select
    //   placeholder="Select Category"
    //   onChange={value => {
    //     this.setState({ category: value });
    //   }}
    //   style={{ width: "70%" }}
    // >
    //   <Option value="Electronics">Electronics</Option>
    //   <Option value="Home">Home</Option>
    //   <Option value="Mens">Mens</Option>
    //   <Option value="Women">Women</Option>
    // </Select>
    // <Input.TextArea
    //   placeholder="Product description"
    //   onChange={a => {
    //     this.setState({ description: a.target.value });
    //   }}
    // />
    //        </div>
    //        <div className="productpics">
    // <h1>Upload pics</h1>
    // <PicturesWall value={this.getdata.bind(this)} />
    //        </div>
    //      </div>
    //      <Button
    //        type="primary"
    //        style={{ alignSelf: "flex-end", margin: "4px" }}
    //        onClick={this.onSubmit.bind(this)}
    //      >
    //        Add Product
    //      </Button>
    //      <Button type="default" style={{ alignSelf: "flex-end", margin: "4px" }}>
    //        Cancel
    //      </Button>
    //    </div>
    //  );
  }
}
