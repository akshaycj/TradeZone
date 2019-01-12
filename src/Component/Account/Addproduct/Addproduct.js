import React, { Component } from "react";
import { Input, Select,Spin, Upload, Icon, Modal, Button, Tag, Tooltip } from "antd";
import "./Addproduct.css";
import {db} from './../../../config';
import PicturesWall from "./Upload";
import AuthStateAction from '../../Actions/AuthSate';
import { connect } from "react-redux";
import AddProductAction from "./../../Actions/AddProduct";
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
      price:"",
      color:"",
      areaofusage:"",
      weight:"",
      specififcation:"",
      urls:[],
      categoryList:[],
      load:true
    };
  }
 


  componentDidMount() {
    this.props.AuthStateAction();
    var that = this
    
    db.ref("category").on("value",function(data){
      var list = []
      data.forEach(i=>{
       list.push(i.val())
      })
      that.setState({load:false,categoryList:list})
    })
  }
  static getDerivedStateFromProps(props,state){
    console.log(props)
      if(props.urls !== state.urls){
        return{
          urls:props.urls
        }
      }
      null
  }
  componentDidUpdate(prevProps,prevState){
    if(this.props.urls.length === prevState.dat.length && prevState.dat.length !==0 ){
      alert("product added")
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
    this.props.AddProductAction(
      this.state.dat,
      this.state.productName,
      this.props.user.uid,
      this.state.category,
      this.state.tags,
      this.state.description,  
      this.state.price,
      this.state.color,
      this.state.areaofusage,
      this.state.specififcation,
      this.state.weight
    );
  }

  render() {
    const { tags, inputVisible, inputValue } = this.state;
    return (
      <div>

      {this.state.load === true  ? <Spin></Spin>:
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
            {this.state.categoryList.map(o=>(
              <Option key={o}>{o}</Option>
            ))}
          </Select>
          <Input.TextArea
            style={{ margin: 10 }}
            placeholder="Product description"
            onChange={a => {
              this.setState({ description: a.target.value });
            }}
          />
          <Input placeholder="Price" style={{ margin: "10px" }}   onChange={e => {
              this.setState({ price: e.target.value });
            }}/>
          <Input placeholder="Product Weight" style={{ margin: 10 }}   onChange={e => {
              this.setState({ weight: e.target.value });
            }} />
          <Input placeholder="Colour" style={{ margin: "10px" }}    onChange={e => {
              this.setState({ color: e.target.value });
            }}/>
          <Input.TextArea
            placeholder="Add Specification Details"
            style={{ margin: 10 }}
            autosize={{ minRows: 2, maxRows: 5 }}
            onChange={e => {
              this.setState({ specififcation: e.target.value });
            }}
          />
          <Input placeholder="Area Of Usage" style={{ margin: "10px" }}   onChange={e => {
              this.setState({ areaofusage: e.target.value });
            }} />
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
