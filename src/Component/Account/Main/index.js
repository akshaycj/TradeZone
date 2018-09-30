import React, { Component } from "react";
import "./index.css";

import { Menu, Icon } from "antd";

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
              <MenuItem key="1">Overview</MenuItem>
              <MenuItem key="2">Add Product</MenuItem>
              <MenuItem key="3">Manage Products</MenuItem>
              <MenuItem key="4">Current Plan</MenuItem>
            </Menu>
          </div>
          <div className="container">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
