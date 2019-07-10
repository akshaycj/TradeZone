import React, { Component } from "react";
import "./Login.css";
import a from "../pics/tradeZone.png";
import { Input, Icon } from "antd";
import { connect } from "react-redux";
import { LoginAction, setDefault } from "../Actions/Login";
import { SignUpUserAction, SignUpSellerAction, setDefaultSignUp } from "../Actions/SignUp";
import AuthStateAction from "../Actions/AuthSate";
import PicturesWall from "./Upload";

const { TextArea } = Input;


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
      email: "",
      password: "",
      phone: "",
      name: "",
      companyName: "",
      yearOfEstab: "",
      liscenceNo: "",
      staffNo: "",
      vatNo: "",
      companyAddr: "",
      aboutCompany: "",
      showErr: false,
      err: "",
      location: '',
      file: {}

    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.err !== state.err) {
      return {
        err: props.err, showErr: true
      }
    }
    if (props.signuperr !== state.err) {
      return {
        err: props.signuperr, showErr: true
      }
    }
    null
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.authenticated !== this.props.authenticated) {
      this.props.AuthStateAction();
      this.closeLogin();
    }
    if (prevProps.signup !== this.props.signup) {
      this.props.AuthStateAction();
      this.closeSignup();
    }

  }

  // componentWillReceiveProps(props) {
  //   if (props.authenticated === true) {
  //     this.props.AuthStateAction();
  //     this.closeLogin();
  //   }
  //   if (props.signup === true) {
  //     this.setState({ showLogin: true });
  //   }
  // }
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

  onCompanyName = e => {
    this.setState({ companyName: e.target.value });
  }

  onYearOfEstab = e => {
    this.setState({ yearOfEstab: e.target.value });
  }

  onLisenceNo = e => {
    this.setState({ liscenceNo: e.target.value });
  }

  onStaffNo = e => {
    this.setState({ staffNo: e.target.value });
  }

  onVatNo = e => {
    this.setState({ vatNo: e.target.value });
  }

  onCompanyAddress = e => {
    this.setState({ companyAddr: e.target.value });
  }

  onAboutCompany = e => {
    this.setState({ aboutCompany: e.target.value });
  }


  onSignUpUser = () => {
    this.props.SignUpUserAction(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.phone
    );
  };
  onSignUpSeller = () => {
    this.props.SignUpSellerAction(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.phone,
      this.state.companyName,
      this.state.yearOfEstab,
      this.state.liscenceNo,
      this.state.staffNo,
      this.state.vatNo,
      this.state.companyAddr,
      this.state.aboutCompany,
      this.state.location,
      this.state.file
    )
  }

  onLogin = () => {
    this.props.LoginAction(this.state.email, this.state.password);
  };
  closeSignup() {
    this.props.value(false);
    this.setState({ showErr: false, err: '' })

    this.props.setDefaultSignUp()
  }
  closeLogin() {
    this.setState({ showErr: false, err: '' })
    this.props.setDefault(),
      this.props.value(false);
  }

  showsignup() {
    this.setState({ showLogin: false })
  }
  onChangeLocation = (e) => {
    this.setState({ location: e.target.value })
  }
  onGetLogo = (e) => {
    console.log(e);

    this.setState({ file: e.originFileObj })
  }

  render() {
    return (
      <div>
        <div className="backgroundlogin">
          {this.props.showSellerSignUp ? <div className="signup" style={{ height: "90vh" }}>
            <Icon
              type="close-circle"
              theme="outlined"
              onClick={this.closeSignup.bind(this)}
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
              <img alt="" src={a} className="image-icon" />
              <span
                style={{
                  margin: "auto",
                  display: "block",
                  overflow: "auto",
                  height: "50%",
                  justifyContent: "space-evenly",
                  width: "100%"
                }}
              >
                <Input
                  placeholder="Name"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onName}
                />
                <Input
                  placeholder="Phone"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onPhone}
                />
                <Input
                  placeholder="Email"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onEmail}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onPassword}
                />
                <Input
                  placeholder="Company Name"
                  style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                  onChange={this.onCompanyName}
                />
                <Input
                  placeholder="Year Of Establishment"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onYearOfEstab}
                />
                <Input
                  placeholder="Commercial Liscence Number"
                  style={{ width: "90%", margin: "auto", borderRadius: 15 }}
                  onChange={this.onLisenceNo}
                />
                <Input
                  placeholder="No of Staff"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onStaffNo}
                />
                <Input
                  placeholder="Vat No"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onVatNo}
                />
                <Input
                  placeholder="Location"
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onChangeLocation}
                />
                <TextArea
                  placeholder="Company Address"
                  autosize={{ minRows: 3, maxRows: 6 }}
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onCompanyAddress}
                />

                <TextArea
                  placeholder="About the Company"
                  autosize={{ minRows: 3, maxRows: 6 }}
                  style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                  onChange={this.onAboutCompany}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignSelf: 'center', margin: '5px' }}>

                  <PicturesWall value={this.onGetLogo}></PicturesWall>
                  {this.state.showErr === true ? <div>{this.state.err}</div> : null}
                </div>
                <div
                  className="common-button app-primary-dark"
                  style={{ width: "40%", margin: "auto", borderRadius: 15 }}
                  onClick={this.onSignUpSeller}
                >
                  SignUp
                  </div>
              </span>
            </div>
          </div>
            :
            this.state.showLogin ? (
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
                  <div className="image-icon">
                    <img src={a} style={{ width: "100%" }} />
                  </div>
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
                  {this.state.showErr === true ? <div>{this.state.err}</div> : null}
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
            ) :
              <div className="signup">
                <Icon
                  type="close-circle"
                  theme="outlined"
                  onClick={this.closeSignup.bind(this)}
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
                  <img src={a} className="image-icon" />
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
                  {this.state.showErr === true ? <div>{this.state.err}</div> : null}
                  <div
                    className="common-button app-primary-dark"
                    style={{ width: "40%", margin: "auto", borderRadius: 15 }}
                    onClick={this.onSignUpUser}
                  >
                    SignUp
            </div>
                </div>
              </div>}


        </div>
      </div>
    );
  }
}
const mapActionToProps = {
  LoginAction: LoginAction,
  SignUpUserAction: SignUpUserAction,
  SignUpSellerAction: SignUpSellerAction,
  AuthStateAction: AuthStateAction,
  setDefault: setDefault,
  setDefaultSignUp: setDefaultSignUp
};
const mapStateToProps = state => (console.log(state),
  {
    authenticated: state.authenticated,
    signup: state.signup,
    err: state.err,
    signuperr: state.signuperr,
    user: state.user
  }
);
export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);
