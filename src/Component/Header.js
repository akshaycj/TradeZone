import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon, Select, Input, Button, Avatar } from "antd";
import Login from "./Login/Login.js";
import Search from "./Search";
import i from "./pics/icon1.png";
import j from "./pics/icon2.png";
import { Auth } from "../config";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Option = Select.Option;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      redirect: false,
      loggedin: false
    };
  }
  componentDidMount() {
    var that = this;
    Auth.onAuthStateChanged(user => {
      if (user) {
        that.setState({ loggedin: true });
      }
    });
  }

  getlogin() {
    this.setState({ showLogin: true });
  }

  loginVal(data) {
    this.setState({ showLogin: data });
  }
  onAddProduct() {
    console.log(this.props);
    this.setState({ redirect: true });
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    const menu1 = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    const menuforham = (
      <Menu mode="vertical" style={{ backgroundColor: "#f7f7f7", border: 0 }}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Iteom 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="country" title="Country">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="7">Option 9</Menu.Item>
        </SubMenu>
        <SubMenu key="category" title="category">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="7">Option 9</Menu.Item>
        </SubMenu>
      </Menu>
    );
    return (
      <div>
        {this.state.showLogin ? (
          <Login value={this.loginVal.bind(this)} />
        ) : null}

        <div className="head1 app-primary-dark">
          <Dropdown overlay={menu} style={{ margin: "6px" }}>
            <span>
              English <Icon type="down" />
            </span>
          </Dropdown>
          Help |
        </div>
        <div className="head2 app-primary">
          <Dropdown overlay={menuforham}>
            <div className="hamburger">
              <span className="hamSpan" />
              <span className="hamSpan" />
              <span className="hamSpan" />
            </div>
          </Dropdown>
          <div className="head3" style={{ maxHeight: 70 }}>
            <Link to="/">
              <img
                src={i}
                style={{
                  width: "80%",
                  margin: 8,
                  maxWidth: "100px",
                  minWidth: "50px"
                }}
              />
            </Link>

            <div className="head22">
              <Select
                showSearch
                showArrow={false}
                className="select"
                placeholder={
                  <span>
                    <Icon
                      type="environment"
                      style={{ fontSize: "12px", color: "#64b5f5" }}
                    />
                    <span
                      style={{
                        fontSize: "100%",
                        color: "#64b5f5",
                        padding: 10
                      }}
                    >
                      Location
                    </span>
                  </span>
                }
                optionFilterProp="children"
                onChange={this.handleChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="ABC">ABC</Option>
                <Option value="CDE">CDE</Option>
                <Option value="EFG">EFG</Option>
              </Select>
              <Select
                showSearch
                showArrow={false}
                className="select"
                placeholder={
                  <span>
                    <img src={j} width={16} />
                    <span style={{ fontSize: "100%", color: "#64b5f5" }}>
                      {" "}
                      Category
                    </span>
                  </span>
                }
                optionFilterProp="children"
                onChange={this.handleChange}
                filterOption={(input, option) =>
                  option.props.children
                    .toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="ABC">ABC</Option>
                <Option value="CDE">CDE</Option>
                <Option value="EFG">EFG</Option>
              </Select>
              <Search className="search" />
              <div className="search-button">
                <Icon
                  type="arrow-left"
                  className="arrow-anim"
                  style={{ marginRight: 15 }}
                />
                Search
              </div>
              {!this.state.loggedin ? (
                <Link to="/account" style={{ alignSelf: "center" }}>
                  <Icon
                    type="user"
                    style={{ color: "white" }}
                    className="header-avatar"
                  />
                </Link>
              ) : (
                <div
                  className="common-button app-accent"
                  style={{
                    alignSelf: "center",
                    marginLeft: 15
                  }}
                  onClick={this.getlogin.bind(this)}
                >
                  <Icon type="user" style={{ marginRight: 5 }} />
                  Be a Seller
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
