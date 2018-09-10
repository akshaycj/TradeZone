import React , { Component } from 'react';
import './FifthComponent.css'
import a from './pics/tradeZone.png';

export default class FifthComponent extends Component{
  render(){
    return(
      <div className="mainDivInF5">
          <div className="fifth1">
            <p className="textIn5th1">Get Started</p>
          </div>
          <div className="fifth2">
            <p className="textIn5th2">See How It Works</p>
          </div>
          <div className="fifth3">
            <div className="imgIn5th3" ><img src={a} style={{width:'100%'}}/></div>
            <p className="textIn5th3">Sell On Tradezone</p>
          </div>
      </div>
    );
  }
}
