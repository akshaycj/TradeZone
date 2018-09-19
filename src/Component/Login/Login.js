import React, { Component } from "react";
import "./Login.css";
import a from "../pics/tradeZone.png";
import { Input, Button, Icon } from "antd";
import { Auth, db } from "../../config.js";
import { connect } from "react-redux";
import LoginAction from "../Actions/Login";
import SignUpAction from "../Actions/SignUp";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: false,
      show: false,
      showLogin: true,
      showSignUp: false,
      email: "",
      password: "",
      phone: "",
      name: ""
    };
  }
  componentWillReceiveProps(props) {
    console.log(props);
  }
  onName = e => {
    this.setState({ name: e.target.value });
  };

  onPhone = e => {
    this.setState({ phone: e.target.value });
  };

  onEmail = e => {
    this.setState({ email: e.target.value });
  };

  onPassword = e => {
    this.setState({ password: e.target.value });
  };

  onSignUp = () => {
    this.props.SignUpAction(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.phone
    );
  };

  onLogin = () => {
    this.props.LoginAction(this.state.email, this.state.password);
  };

  closeLogin() {
    this.setState({ showLogin: false });
    this.props.value(false);
  }

  showsignup() {
    this.setState({ showLogin: false });
  }

  render() {
    return (
      <div>
        <div className="backgroundlogin">
          {this.state.showLogin ? (
            <div className="login">
              <Icon
                type="close-circle"
                theme="outlined"
                onClick={this.closeLogin.bind(this)}
                style={{
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  fontSize: "25px",
                  padding: "10px",
                  position: "absolute"
                }}
              />
              <div className="outers">
                <h1 style={{ color: "rgba(250,125,150)" }}>Login</h1>
                <img
                  src={a}
                  style={{
                    width: "65%",
                    margin: "auto",
                    borderRadius: "90px",
                    padding: "0"
                  }}
                />
                <div
                  style={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    height: "20%",
                    width: "100%",
                    justifyContent: "space-evenly"
                  }}
                >
                  <Input
                    placeholder="Email"
                    style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                    onChange={this.onEmail}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                    onChange={this.onPassword}
                  />
                </div>
                <div
                  className="common-button app-primary-dark"
                  style={{ width: "40%", margin: "auto", borderRadius: 15 }}
                  onClick={this.onLogin}
                >
                  Login
                </div>
                <div
                  onClick={this.showsignup.bind(this)}
                  style={{ cursor: "pointer" }}
                >
                  Not a user? SignUp
                </div>
              </div>
            </div>
          ) : (
            <div className="signup">
              <Icon
                type="close-circle"
                theme="outlined"
                onClick={this.closeLogin.bind(this)}
                style={{
                  cursor: "pointer",
                  alignSelf: "flex-end",
                  fontSize: "15px",
                  padding: "10px",
                  position: "absolute"
                }}
              />
              <div className="outersofsignup">
                <h1 style={{ color: "rgba(250,125,150)" }}>SignUp</h1>
                <img
                  src={a}
                  style={{
                    width: "60%",
                    margin: "auto",
                    borderRadius: "90px",
                    padding: "0"
                  }}
                />
                <span
                  style={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    height: "40%",
                    justifyContent: "space-evenly",

                    width: "100%"
                  }}
                >
                  <Input
                    placeholder="Name"
                    style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                    onChange={this.onName}
                  />
                  <Input
                    placeholder="Phone"
                    style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                    onChange={this.onPhone}
                  />
                  <Input
                    placeholder="Email"
                    style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                    onChange={this.onEmail}
                  />
                  <Input
                    placeholder="Password"
                    type="password"
                    style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                    onChange={this.onPassword}
                  />
                </span>
                <div
                  className="common-button app-primary-dark"
                  style={{ width: "40%", margin: "auto", borderRadius: 15 }}
                  onClick={this.onSignUp}
                >
                  SignUp
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
const mapActionToProps = {
  LoginAction: LoginAction,
  SignUpAction: SignUpAction
};
const mapStateToProps = state => (
  console.log(state),
  {
    authenticated: state.data
  }
);
export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);
