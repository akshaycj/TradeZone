import React, { Component } from "react";
import "./index.css";
import { Menu, Icon } from "antd";
import LatestOffers from './LatestOffers';
import TopProducts from './TopProducts';
import TopServices from './TopServices';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class extends Component {
  render() {
    return (
     <div>
      <TopProducts/>
      <br/>
      <LatestOffers/>
      <br/>
      <TopServices/>
     </div>
    );
  }
}
