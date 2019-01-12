import React, { Component } from "react";
import "./index.css";
import { Menu, Icon } from "antd";
import TopCategory from './TopCategory';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class extends Component {
  render() {
    return (
     <div>
    
     
      <TopCategory/>
     </div>
    );
  }
}
