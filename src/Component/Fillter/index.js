import React, { Component } from "react";
import "./index.css";
import Product from "../Home/Recents/Recent";
import { Menu , Icon , Button } from "antd";

const SubMenu = Menu.SubMenu;

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed : true ,
    }
  }
  
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
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
        <div className="sort-container-small" tyle={{ width: 256  , height : 500 }}>
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="light"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="1">
              <Icon type="pie-chart" />
              <span>Option 1</span>
            </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
            <Menu.Item key="3">
              <Icon type="inbox" />
              <span>Option 3</span>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
           <Menu.Item key="9">Option 9</Menu.Item>
           <Menu.Item key="10">Option 10</Menu.Item>
           <SubMenu key="sub3" title="Submenu">
             <Menu.Item key="11">Option 11</Menu.Item>
             <Menu.Item key="12">Option 12</Menu.Item>
           </SubMenu>
            </SubMenu>
          </Menu>
       </div>
        <div className="product-container">{items}</div>
      </div>
    );
  }
}
