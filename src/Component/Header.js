import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Icon, Select, Input, Button } from "antd";
import Login from "./Login/Login.js";
import Search from "./Search";
import i from "./pics/icon1.png";
import j from "./pics/icon2.png";
import { Auth } from "../config";

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
          <div className="head3" style={{ maxHeight: 70 }}>
            <img src={i} style={{ width: 100, margin: 8 }} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                alignSelf: "center"
              }}
            >
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
                <div
                  className="common-button"
                  style={{
                    margin: "3px",
                    width: "200px",
                    backgroundColor: "#63b5f5",
                    color: "#fff",
                    justifyContent: "center"
                  }}
                >
                  <Icon
                    type="arrow-left"
                    className="arrow-anim"
                    style={{ marginRight: 15 }}
                  />
                  Search
                </div>
                {this.state.loggedin ? (
                  <Icon type="user" />
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
      </div>
    );
  }
}

export default Header;
