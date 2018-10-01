import React, { Component } from "react";
import "./index.css";
import Product from "../Home/Recents/Recent";
import { Menu } from "antd";

const SubMenu = Menu.SubMenu;

export default class extends Component {
  render() {
    const items = [];
    for (let i = 0; i < 12; i++) {
      items.push(
        <div style={{ marginTop: 2 }}>
          <Product />
        </div>
      );
    }
    return (
      <div className="filter-main-container">
        <div className="sort-container">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["cat", "brands"]}
            style={{ width: "100%", borderRight: 0, textAlign: "left" }}
          >
            <SubMenu key="cat" title="Related Category">
              <Menu.Item key="1">Lorem Ispum</Menu.Item>
              <Menu.Item key="2">Lorem Ispum</Menu.Item>
              <Menu.Item key="2">Lorem Ispum</Menu.Item>
            </SubMenu>
            <SubMenu key="brands" title="Related Brands">
              <Menu.Item key="4">Lorem Ispum</Menu.Item>
              <Menu.Item key="5">Lorem Ispum</Menu.Item>
              <Menu.Item key="6">Lorem Ispum</Menu.Item>
            </SubMenu>
            <SubMenu key="serv" title="Related services">
              <Menu.Item key="7">Lorem Ispum</Menu.Item>
              <Menu.Item key="8">Lorem Ispum</Menu.Item>
              <Menu.Item key="9">Lorem Ispum</Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div className="product-container">{items}</div>
      </div>
    );
  }
}
