import React, { Component } from "react";
import "./index.css";
import { Menu, Icon } from "antd";
import { Link, Redirect } from "react-router-dom";
import { Auth } from "../../../config";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class extends Component {
  state = {
    logout: false,
    current: "mail"
  };

  onLogout = () => {
    Auth.signOut();
    this.setState({ logout: true });
  };

  handleClick = e => {
    console.log("click ", e);
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
            <Link to="/account/manage">Manage Products</Link>
          </div>
          <div className="top-nav-elements">Current Plan</div>
          <div className="top-nav-elements">
            <Link to="/account/add">Add Product</Link>
          </div>
        </div>
        <div
          className="top-nav"
          style={{ width: "80%", margin: "auto", marginBottom: "30px" }}
        >
          <div className="top-nav-elements">
            <Link to="/account">Overview</Link>
          </div>
          <div className="top-nav-elements">
            <Link to="/account/profile">Profile</Link>
          </div>
        </div>
        <div className="account-profile-container">
          <div className="avatar">
            <img
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              width="100%"
              height="100%"
            />
          </div>
          <div className="menu" style={{ width: "100%" }}>
            <Menu
              mode="inline"
              style={{ width: "100%", borderRight: 0 }}
              defaultSelectedKeys="1"
            >
              <MenuItem key="1">
                <Link to="/account">Overview</Link>
              </MenuItem>
              <MenuItem key="2">
                <Link to="/account/add">Add Product</Link>
              </MenuItem>
              <MenuItem key="3">
                <Link to="/account/manage">Manage Products</Link>
              </MenuItem>
              <MenuItem key="4">Current Plan</MenuItem>
              <MenuItem key="5">
                <Link to="/account/profile">Profile</Link>
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
