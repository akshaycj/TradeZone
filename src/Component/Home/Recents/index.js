import React, { Component } from "react";
import "./index.css";
import Recent from "./Recent";

import { Carousel } from "react-responsive-carousel";

import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

export default class extends Component {
  render() {
    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,

      className: "slider variable-width"
    };
    return (
      <div style={{ display: "flex", width: 1050, backgroundColor: "white" }}>
        <Recent />
        <Recent />
        <Recent />
        <Recent />
        <Recent />
      </div>
    );
  }
}
