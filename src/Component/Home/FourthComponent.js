import React , { Component } from 'react';
import './FourthComponent.css';
import { Input } from 'antd';

export default class FourthComponent extends Component{
  render(){
    return(
      <div className="mainDivInF4">
        <div className="fourth1">
            <p className="textIn4th1">Your<br/> Personalized Recommendations here</p>
        </div>
        <div className="fourth2">
          <div className="div1Infourth2">
            <p>Sign in to see</p>
          </div>
          <div className="div2Infourth2">
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
          </div>
          <div className="div3Infourth2">
            <p className="buttonIn4th2">Sign In</p>
          </div>
        </div>
        <div className="fourth3">
          <p className="textIn4th3">Sign Up</p>
        </div>
      </div>
    );
  }
}
