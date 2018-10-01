import React, { Component } from "react";
import Slider from "./Slider";
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

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="home-header">
          <div className="home-category">
            <Category />
            <br />
            <Category />
            <br />
            <Category />
          </div>
          <div className="home-components">
            <div className="slider-home">
              <Slider />
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
          <Grid heading={"Featured Products"} />
          <Grid heading={"Top Rated Products"} />
          <FourthComponent />
          <FifthComponent />
        </div>
      </div>
    );
  }
}

export default Home;
