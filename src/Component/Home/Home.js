import React, { Component } from "react";
import Slider1 from "./Slider";
import "./Slider.css";
import "./Block";
import "./Block.css";
import Grid from "./Grid";
import FourthComponent from "./FourthComponent";
import "./FourthComponent.css";
import FifthComponent from "./FifthComponent";
import "./FifthComponent.css";
import "./Home.css";
import Category from "./Category";
import Recents from "./Recents";
import {connect} from 'react-redux';
import  AuthStateAction from '../Actions/AuthSate';
class Home extends Component {
  constructor(props){
    super(props);
    this.state={}
  }
  
  componentDidMount(){
    this.props.AuthStateAction()
  }
  
  render() {
    return (
      <div className="Home">
        <div className="home-header">
          <div className="home-category">
            <Category />
           
          </div>
          <div className="home-components">
            <div className="slider-home">
              <Slider1 />
            </div>
            <div className="recent-products">
              <h3 style={{ textAlign: "left", fontStyle: "bold" }}>
                Recent Products:
              </h3>
              <Recents />
            </div>
          </div>
        </div>
        <br /> <br />
        <br />
        <div>
          <Grid heading={"Top Rated Products"} />
          <FourthComponent />
          <FifthComponent />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>({
user: state.user
})
const mapActionToProps = {
AuthStateAction:AuthStateAction
}
export default connect(mapStateToProps,mapActionToProps)(Home);
