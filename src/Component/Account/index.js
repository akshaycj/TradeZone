import React, { Component } from "react";
import "./index.css";

import { Menu, Icon } from "antd";

export default class extends Component {
  render() {
    return (
      <div>
        <div className="account-profile-container">
          <div className="avatar">.</div>
          <div className="menu">
            <Menu mode="inline" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
}
