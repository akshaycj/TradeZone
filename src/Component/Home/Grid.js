import React from "react";
import "./Grid.css";
import "./Slider.css";
import Featured from "./Featured";
import LatestOffers from "./Latestoffers";
import FeaturedServices from "./FeaturedServices";

class Grid extends React.Component {
  render() {

    return (
      <div className="sub">
        <Featured />
        <br />
        <LatestOffers />
        <br />
        <br />
        <FeaturedServices />
      </div>
    );
  }
}
export default Grid;
