import React, { Component } from "react";
import {
  Input,
  Select,
  Upload,
  Icon,
  Modal,
  Button,
  Tag,
  Tooltip,
  Spin
} from "antd";
import "./Addproduct.css";
import PicturesWall from "./Upload";

import { connect } from "react-redux";
import AddProductAction from "./../../Actions/AddProduct";
import { db } from "../../../config";
const Option = Select.Option;

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dat: [],
      productName: "",
      category: "",
      description: "",
      tags: [],
      inputVisible: false,
      inputValue: "",
      users: [],
      spin: true,
      uid: ""
    };
  }
  componentWillReceiveProps(props) {
    console.log(props.urls);
  }

  componentDidMount() {
    var that = this;

    db.ref("AdminAdded").on("value", function(owl) {
      db.ref("usersDetails").on("value", function(cat) {
        cat.forEach(y => {
          owl.forEach(p => {
            if (y.key === p.val()) {
              var it = {};
              it = y.val();
              it["uid"] = p.val();
              that.state.users.push(it);
            }
          });
        });

        that.setState({ spin: false });
      });
    });
  }
  handleClose = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
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
    this.setState({ dat: data });
  }

  onSubmit() {
    console.log(this.props.user.uid);
    this.props.AddProductAction(
      this.state.dat,
      this.state.productName,
      this.state.uid,
      this.state.category,
      this.state.tags,
      this.state.description
    );
  }
  userSelect = e => {
    this.setState({ uid: e });
  };
  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>
        {this.state.spin == true ? (
          <Spin />
        ) : (
          <div>
            <h1>Add Product</h1>
            <div className="add-main">
              <Select
                placeholder="select User"
                onChange={this.userSelect}
                style={{ width: "100%", margin: 10 }}
              >
                {this.state.users.map(t => (
                  <Option value={t.uid}>{t.name}</Option>
                ))}
              </Select>
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
              <Input placeholder="Price" style={{ margin: "10px" }} />
              <Input placeholder="Product Weight" style={{ margin: 10 }} />
              <Input placeholder="Colour" style={{ margin: "10px" }} />
              <Input.TextArea
                placeholder="Add Specification Details"
                style={{ margin: 10 }}
                autosize={{ minRows: 2, maxRows: 5 }}
              />
              <Input placeholder="Area Of Usage" style={{ margin: "10px" }} />
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
                onClick={this.onSubmit.bind(this)}
              >
                + Add
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
const mapActionToProps = {
  AddProductAction: AddProductAction
};
const mapSateToProps = state => ({
  urls: state.data,
  user: state.user
});
export default connect(
  mapSateToProps,
  mapActionToProps
)(AddProduct);
