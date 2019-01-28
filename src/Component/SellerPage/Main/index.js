import React, { Component } from "react";
import "./index.css";
import { Menu, Icon,Spin } from "antd";
import { Link, Redirect } from "react-router-dom";
import { Auth, db } from "../../../config";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      logout: false,
      current: "mail",
      productUrl:'',
      img:'',
      load:true
    }
  };
componentDidMount(){
  var that = this
   var product = this.props.url+"/products"
   var url = ''
   db.ref('users').child(this.props.param+"").child("details").child('url').on("value",function(data){
     
     url = data.val()
     that.setState({load:false,img:url})
   })
   this.setState({productUrl:product})
}
  onLogout = () => {
    Auth.signOut();
    this.setState({ logout: true });
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="account-main-container">
        <div
          className="top-nav"
          style={{ padding: "7px", alignSelf: "center" }}
        >
          <div className="top-nav-elements">
            <Link to={this.props.url}>Seller Details</Link>
          </div>
          <div className="top-nav-elements">Seller Products</div>
          
        </div>
        
        <div className="account-profile-container">
          <div className="avatar" style={{alignItems:'center',justifyContent:'center',display:'flex'}}>
          {this.state.load ? <Spin/> : 
            <img
              src={this.state.img}
              width="100%"
              height="100%"
            />
          }
          </div>
          <div className="menu" style={{ width: "100%" }}>
            <Menu
              mode="inline"
              style={{ width: "100%", borderRight: 0 }}
              defaultSelectedKeys="1"
            >
              <MenuItem key="1">
                <Link to={this.props.url}>Seller Details</Link>
              </MenuItem>
              <MenuItem key="2">
                <Link to={this.state.productUrl}>Seller Products</Link>
              </MenuItem>
             
            </Menu>
          </div>
          <div
            className="common-button app-primary-dark"
            style={{
              width: 30,
              alignSelf: "center",
              marginTop: "auto",
              marginBottom: 10
            }}
            onClick={this.onLogout}
          >
            Log out
          </div>
        </div>
        <div className="mdetails">{this.props.children}</div>
        {this.state.logout ? <Redirect to="/" /> : null}
      </div>
    );
  }
}
