import React, { Component } from "react";
import "./index.css";

import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const MenuItem = Menu.Item;

export default class extends Component {
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
                <Link to="/">Overview</Link>
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
        </div>
        <div className="mdetails">{this.props.children}</div>
      </div>
    );
  }
}
