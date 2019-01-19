import React, { Component } from "react";
import "./index.css";
import { Menu, Icon } from "antd";
import { Link, Redirect } from "react-router-dom";
import { Auth } from "../../../config";

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class extends Component {
  state = {
    logout: false,
    current: "mail"
  };

  onLogout = () => {
    Auth.signOut();
    this.setState({ logout: true });
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div className="account-main-container">
       
        <div className="account-profile-container">
          <div className="avatar">
            <img
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              width="100%"
              height="100%"
            />
          </div>
          <div className="menu" style={{ width: "100%" }}>
            <Menu
              mode="inline"
              style={{ width: "100%", borderRight: 0 }}
              defaultSelectedKeys="1"
            >
              <MenuItem key="1">
                <Link to="/authUser">Add User</Link>
              </MenuItem>
              <MenuItem key="2">
                <Link to="/authUser/add">Add Product</Link>
              </MenuItem>
              <MenuItem key="3">
                <Link to="/authUser/featured">Featured</Link>
              </MenuItem>
              <MenuItem key="4">
                <Link to="/authUser/featuredServices">Featured Services</Link>
              </MenuItem>
              <MenuItem key="5">
                <Link to="/authUser/latest">Latest Offers</Link>
              </MenuItem>
              <MenuItem key="6">
                <Link to="/authUser/CategoryUpdate">CategoryUpdate</Link>
              </MenuItem>
              <MenuItem key="7">
                <Link to="/authUser/topBanner">TopBanner</Link>
              </MenuItem>

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
