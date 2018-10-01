import React, { Component } from "react";
import "./index.css";
import { Input, Icon, Button } from "antd";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sam",
      company: "GOT",
      email: "winteriscoming@gmail.com",
      phone: "9444333333"
    };
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1>Your Profile</h1>
        <Input
          style={{ width: "360px", margin: "10px" }}
          addonBefore={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon style={{ fontSize: "23px" }} type="user" theme="outlined" />
              Name
            </div>
          }
          defaultValue={this.state.name}
        />
        <Input
          style={{ width: "360px", margin: "10px" }}
          addonBefore={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon style={{ fontSize: "23px" }} type="mail" theme="outlined" />
              Email
            </div>
          }
          defaultValue={this.state.email}
        />
        <Input
          style={{ width: "360px", margin: "10px" }}
          addonBefore={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Icon
                style={{ fontSize: "23px" }}
                type="mobile"
                theme="outlined"
              />
              Phone
            </div>
          }
          defaultValue={this.state.phone}
        />
        <div
          className="common-button app-accent"
          style={{ width: "100px", margin: "auto" }}
        >
          Update{" "}
        </div>
      </div>
    );
  }
}
