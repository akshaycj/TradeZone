import React, { Component } from 'react';
import './FourthComponent.css';
import { LoginAction } from "../Actions/Login";
import { connect } from "react-redux";
import { Input } from 'antd';

class FourthComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
  }

  onLogin = () => {
    this.props.LoginAction(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="mainDivInF4">
        <div className="fourth1">
          <p className="textIn4th1">Your<br /> Personalized Recommendations here</p>
        </div>
        <div className="fourth2">
          <div className="div1Infourth2">
            <p>Sign in to see</p>
          </div>
          <div className="div2Infourth2">
            <Input placeholder="Username" />
            <Input placeholder="Password" />
          </div>
          <div className="div3Infourth2">
            <p className="buttonIn4th2" onClick={this.onLogin}>Sign In</p>
          </div>
        </div>
        <div className="fourth3">
          <p className="textIn4th3">Sign Up</p>
        </div>
      </div>
    );
  }
}

const mapActionToProps = {
  LoginAction: LoginAction,
}
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
)(FourthComponent);
