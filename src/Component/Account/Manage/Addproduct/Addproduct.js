import React, { Component } from "react";
import { Input, Select, Spin, Icon, Tag, Tooltip } from "antd";
import "./Addproduct.css";
import { db } from '../../../../config';
import AuthStateAction from '../../../Actions/AuthSate';
import { connect } from "react-redux";
import AddProductAction from "../../../Actions/AddProduct";
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
      price: "",
      color: "",
      areaofusage: "",
      weight: "",
      specififcation: "",
      urls: [],
      listUrl: [],
      categoryList: [],
      load: true,
      seller: ''
    };
  }

  componentDidMount() {


    this.setState({ load: true })
    var that = this
    db.ref('products').child(this.props.val).on('value', function (data) {
      const { productName, category, description, tags, specififcation, urls, seller, price, weight, color, areaofusage } = data.val()
      typeof tags === 'undefined' ? [] : tags
      that.setState({
        productName: typeof productName === 'undefined' ? "" : productName,
        tags: typeof tags === 'undefined' ? [] : tags,
        category: typeof category === 'undefined' ? "" : category, description: typeof description === 'undefined' ? "" : description,
        specififcation: typeof specififcation === 'undefined' ? "" : specififcation,
        listUrl: typeof urls === 'undefined' ? [] : urls,
        seller: typeof seller === 'undefined' ? "" : seller,
        price: typeof price === 'undefined' ? "" : price, weight: typeof weight === 'undefined' ? "" : weight,
        color: typeof color === 'undefined' ? "" : color, areaofusage: typeof areaofusage === 'undefined' ? "" : areaofusage,
        load: false
      })
    })

    this.props.AuthStateAction();
    var that = this

    db.ref("category").on("value", function (data) {
      var list = []
      data.forEach(i => {
        list.push(i.val())
      })
      that.setState({ load: false, categoryList: list })
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.val !== this.props.val) {

      this.setState({ load: true })
      var that = this
      db.ref('products').child(this.props.val).on('value', function (data) {
        var product = {}
        const { productName, category, description, tags, specififcation, urls, seller, price, weight, color, areaofusage } = data.val()
        typeof tags === 'undefined' ? [] : tags
        that.setState({
          productName: typeof productName === 'undefined' ? "" : productName,
          tags: typeof tags === 'undefined' ? [] : tags,
          category: typeof category === 'undefined' ? "" : category, description: typeof description === 'undefined' ? "" : description,
          specififcation: typeof specififcation === 'undefined' ? "" : specififcation,
          listUrl: typeof urls === 'undefined' ? [] : urls,
          seller: typeof seller === 'undefined' ? "" : seller,
          price: typeof price === 'undefined' ? "" : price, weight: typeof weight === 'undefined' ? "" : weight,
          color: typeof color === 'undefined' ? "" : color, areaofusage: typeof areaofusage === 'undefined' ? "" : areaofusage,
          load: false
        })
      })
    }

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
    const { productName,
      category,
      tags,
      description,
      price,
      color,
      areaofusage,
      specififcation,
      weight,
      seller } = this.state
    db.ref("products").child(this.props.val).set({

      productName,
      urls: this.state.listUrl,
      category,
      tags,
      description,
      price,
      color,
      areaofusage,
      specififcation,
      weight,
      seller
    }).then(() => {
      db.ref('users').child(this.state.seller).child('products').child(this.props.val).set({
        productName,
        urls: this.state.listUrl,
        category,
        tags,
        description,
        price,
        color,
        areaofusage,
        specififcation,
        weight,
        seller
      })
    }).then(() => {
      alert('Prodct updated successfully')
    })
  }

  render() {

    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>

        {this.state.load === true ? <Spin></Spin> :
          <div>
            <h1 className='heading-add'>Update Product</h1>
            <div className="add-main">
              <Input
                placeholder="Product Name"
                onChange={e => {
                  this.setState({ productName: e.target.value });
                }}
                value={this.state.productName}
                style={{ margin: 10 }}
              />
              <Select
                placeholder="Select Category"
                value={this.state.category}
                onChange={value => {
                  this.setState({ category: value });
                }}
                style={{ width: "100%", margin: 10 }}
              >
                {this.state.categoryList.map(o => (
                  <Option key={o}>{o}</Option>
                ))}
              </Select>
              <Input.TextArea
                style={{ margin: 10 }}
                placeholder="Product description"
                value={this.state.description}
                onChange={a => {
                  this.setState({ description: a.target.value });
                }}
              />
              <Input placeholder="Price" style={{ margin: "10px" }} onChange={e => {
                this.setState({ price: e.target.value });

              }}
                value={this.state.price}
              />
              <Input placeholder="Product Weight" style={{ margin: 10 }} onChange={e => {
                this.setState({ weight: e.target.value });

              }}
                value={this.state.weight}
              />
              <Input placeholder="Colour" style={{ margin: "10px" }} value={this.state.color} onChange={e => {
                this.setState({ color: e.target.value });
              }} />
              <Input.TextArea
                value={this.state.specififcation}
                placeholder="Add Specification Details"
                style={{ margin: 10 }}
                autosize={{ minRows: 2, maxRows: 5 }}
                onChange={e => {
                  this.setState({ specififcation: e.target.value });
                }}
              />
              <Input placeholder="Area Of Usage" style={{ margin: "10px" }} onChange={e => {
                this.setState({ areaofusage: e.target.value });
              }}
                value={this.state.areaofusage} />
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


              <div
                className="common-button app-accent"
                style={{ marginTop: "auto" }}
                onClick={this.onSubmit.bind(this)}
              >
                Update
          </div>
            </div>
          </div>
        }
      </div>
    );
  }
}
const mapActionToProps = {
  AddProductAction: AddProductAction,
  AuthStateAction: AuthStateAction,

};
const mapSateToProps = state => ({
  urls: state.urls,
  user: state.user,

});
export default connect(
  mapSateToProps,
  mapActionToProps
)(AddProduct);
