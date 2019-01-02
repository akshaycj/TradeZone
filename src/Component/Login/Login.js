import React, { Component } from "react";
import "./Login.css";
import a from "../pics/tradeZone.png";
import { Input, Button, Icon } from "antd";
import { Auth, db } from "../../config.js";
import { connect } from "react-redux";
import {LoginAction,SignOut} from "../Actions/Login";
import {SignUpUserAction,SignUpSellerAction} from "../Actions/SignUp";
import AuthStateAction from "../Actions/AuthSate";

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
      companyName : "",
      yearOfEstab : "",
      liscenceNo : "",
      staffNo : "",
      vatNo : "",
      companyAddr:"",
      aboutCompany:""
    };
  }

  componentDidMount(){
    
  }

  componentWillReceiveProps(props) {
    if (props.authenticated === true) {
      this.props.AuthStateAction();
      this.closeLogin();
    }
    if (props.signup === true) {
      this.setState({ showLogin: true });
    }
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

  onCompanyName = e => {
    this.setState({ companyName : e.target.value });
  }

  onYearOfEstab = e => {
    this.setState({ yearOfEstab : e.target.value });
  }

  onLisenceNo = e => {
    this.setState({ liscenceNo : e.target.value });
  }

  onStaffNo = e => {
    this.setState({ staffNo : e.target.value });
  }

  onVatNo = e => {
    this.setState({ vatNo : e.target.value });
  }

  onCompanyAddress = e => {
    this.setState({ companyAddr : e.target.value });
  }

  onAboutCompany = e => {
    this.setState({ aboutCompany : e.target.value });
  }


  onSignUpUser = () => {
    this.props.SignUpUserAction(
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.phone
    );
    this.props.value(false);
  };
  onSignUpSeller = () =>{
    this.props.SignUpSellerAction( 
      this.state.email,
      this.state.password,
      this.state.name,
      this.state.phone,
      this.state.companyName ,
      this.state.yearOfEstab ,
      this.state.liscenceNo ,
      this.state.staffNo ,
      this.state.vatNo,
      this.state.companyAddr,
      this.state.aboutCompany
    )
    this.props.value(false);
  }

  onLogin = () => {
    this.props.LoginAction(this.state.email, this.state.password);
  };

  closeLogin() {
    this.setState({ showLogin: false , showSellerLogin : false});
    this.props.value(false);
  }

  showsignup() {
   this.setState({showLogin:false})
  }

  render() {
    return (
      <div>
        <div className="backgroundlogin">
        {this.props.showSellerLogin ?  <div className="signup" style={{height : "90vh"}}>
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
                <img src={a} className="image-icon" />
                <span
                  style={{
                    margin: "auto",
                    display: "block",
                    overflow:"auto",
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
                    style={{width : "90%" , margin: "auto" , borderRadius : 15}}
                    onChange={this.onCompanyName}
                  />
                  <Input
                    placeholder="Year Of Establishment"
                    style={{width: "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onYearOfEstab}
                  />
                  <Input
                    placeholder="Commercial Liscence Number"
                    style={{width : "90%" , margin : "auto" , borderRadius :15}}
                    onChange={this.onLisenceNo}
                  />
                  <Input
                    placeholder="No of Staff"
                    style={{width: "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onStaffNo}
                  />
                  <Input
                    placeholder="Vat No"
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onVatNo}
                  />
                  <TextArea
                    placeholder="Company Address"
                    autosize={{ minRows: 3, maxRows: 6 }}
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onCompanyAddress}
                  />
                  <TextArea
                    placeholder="About the Company"
                    autosize={{ minRows: 3, maxRows: 6 }}
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onAboutCompany}
                  />
                  <div
                    className="common-button app-primary-dark"
                    style={{ width: "40%", margin: "auto", borderRadius: 15 }}
                    onClick={this.onSignUpSeller}
                  >
                    SignUp
                  </div>
                </span>
              </div>
            </div> : 
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
          ) : <div className="signup">
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
  SignUpSellerAction:SignUpSellerAction,
  AuthStateAction: AuthStateAction,
};
const mapStateToProps = state => (
  console.log(state),
  {
    authenticated: state.authenticated,
    signup: state.signup,
    user: state.user
  }
);
export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);
