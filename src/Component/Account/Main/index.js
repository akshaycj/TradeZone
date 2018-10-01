import React, { Component } from "react";
import "./index.css";

import { Menu, Icon } from "antd";
import { Link, Redirect } from "react-router-dom";
import { Auth } from "../../../config";

const MenuItem = Menu.Item;

export default class extends Component {
  state = {
    logout: false
  };
  onLogout = () => {
    Auth.signOut();
    this.setState({ logout: true });
  };
  render() {
    return (
      <div className="account-main-container">
        <div className="account-profile-container">
          <div className="avatar">.</div>
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
