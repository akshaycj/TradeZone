import React from "react";
import Block from "./Block";
import BlockBroad from "./BlockBroad";
import "./Grid.css";

import "./Slider.css";
import Slider from "react-slick";

import a from "./pics/1.jpg";
import b from "./pics/2.jpg";
import c from "./pics/3.jpg";
import d from "./pics/4.jpg";
import Featured from "./Featured";
import LatestOffers from "./Latestoffers";

class Grid extends React.Component {
  render() {
    
    return (
      <div className="sub">
        

        <Featured />
        <br/>
        <br/>
       
        <br/>
        <br/>
        <LatestOffers/>
        <Featured />

      </div>
    );
  }
}
export default Grid;
