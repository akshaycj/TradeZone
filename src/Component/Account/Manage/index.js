import React, { Component } from "react";
import "./index.css";
import { db, Auth } from "../../../config";
import { List, Avatar, Button, Skeleton, Icon, Popconfirm ,Modal} from "antd";
import Frame from './Frame'
import Addproduct from "./Addproduct/Addproduct";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      uid: "",
      modal:false,
      key:'',
    };
  }
  componentDidMount() {
    var that = this;
    Auth.onAuthStateChanged(
      function(user) {
        if (user) {
          
          this.setState({ uid: user.uid });
          db.ref("users")
            .child(this.state.uid).child("products")
            .on(
              "value",
              function(dataSnap) {
                
                var data = [];
                dataSnap.forEach(element => {
                  var d = {
                    productName: element.val().name,
                    key: element.key,
                    urls: element.val().urls
                  };
                  data.push(d);
                });

                this.setState({ products: data, loading: false });
              }.bind(this)
            );
        }
      }.bind(this)
    );
    
  }
  showModal = (key) =>{
    console.log(key);
    
    this.setState({modal:true,key:key})
  }
  onDelete = key => {
    
    db.ref("users")
      .child(this.state.uid).child('products')
      .child(key)
      .remove();
    db.ref("products")
      .child(key)
      .remove();
  };
  handleOk = ()  =>{
this.setState({modal:false})
  }
  handleCancel = ()=>{
    this.setState({modal:false})
  }
  render() {
    return (
      <div>
        <h2>Manage your products:</h2>
        <br />
         <Modal
          title="Update Product"
          visible={this.state.modal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        ><Addproduct val={this.state.key} /></Modal>
        {this.state.products ? (
          <div style={{display:'flex',flexWrap:"wrap",justifyContent:"space-evenly]"}}>
          {this.state.products.map(p=>(
          <div style={{margin:'20px'}}>
           <Frame value={p} showModal={this.showModal} onDelete={this.onDelete}/>
          </div>
        ))}

        </div>
           
        ) : (
          <h2>No Products</h2>
        )}
      </div>
    );
  }
}
