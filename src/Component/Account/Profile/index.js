import React, { Component } from "react";
import "./index.css";
import { Input, Icon, Button, Spin } from "antd";
import connect from "react-redux/lib/connect/connect";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";
import { db, Auth } from "../../../config.js";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      phone: "",
      loading: false,
      uid: ""
    };
  }
  componentWillMount() {
    var that = this;
    Auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ uid: user.uid });
        db.ref("users")
          .child(user.uid + "").child("details")
          .on("value", function(data) {
            that.setState({
              name: data.val().name,
              email: data.val().email,
              phone: data.val().phone,
              loading: true
            });
          });
      }
    });
  }
  onUpdateEmail = e => {
    this.setState({ email: e.target.value });
  };
  onUpdateName = e => {
    this.setState({ name: e.target.value });
  };
  onUpdatePhone = e => {
    this.setState({ phone: e.target.phone });
  };
  onUpdateClick = () => {
    db.ref("users")
      .child(this.state.uid + "").child("details")
      .set({
        email: this.state.email,
        name: this.state.name,
        phone: this.state.phone
      });
    alert("Ur profile is updated");
  };
  render() {
    return (
      <div>
        {this.state.loading ? (
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
              style={{ width: "95%", maxWidth: "360px", margin: "10px" }}
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
                    type="user"
                    theme="outlined"
                  />
                  Name
                </div>
              }
              defaultValue={this.state.name}
              onChange={this.onUpdateName}
            />
            <Input
              style={{ width: "95%", maxWidth: "360px", margin: "10px" }}
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
                    type="mail"
                    theme="outlined"
                  />
                  Email
                </div>
              }
              defaultValue={this.state.email}
              onChange={this.onUpdateEmail}
            />
            <Input
              style={{ width: "95%", maxWidth: "360px", margin: "10px" }}
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
              onChange={this.onUpdatePhone}
            />
            <div
              className="common-button app-accent"
              style={{ width: "100px", margin: "auto" }}
              onClick={this.onUpdateClick}
            >
              Update{" "}
            </div>
          </div>
        ) : (
          <Spin />
        )}
      </div>
    );
  }
}
const mapStateToProps1 = state => ({
  user: state.user
});
export default connect(mapStateToProps1)(index);
