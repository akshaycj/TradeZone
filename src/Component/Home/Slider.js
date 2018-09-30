import React, { Component } from "react";
import { Card } from "antd";
import "./Slider.css";
import a from "./pics/1.jpg";
import b from "./pics/2.jpg";
import c from "./pics/3.jpg";
import d from "./pics/4.jpg";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class Slider extends Component {
  render() {
    return (
      <div className="cardi">
        <Carousel
          autoPlay
          showThumbs={false}
          className="adjusti"
          width="1050px"
          height="315px"
        >
          <div>
            <img className="imagei" src={a} alt="mobile pic 1" />
          </div>
          <div>
            <img className="imagei" src={b} alt="mobile pic 2" />
          </div>
          <div>
            <img className="imagei" src={c} alt="Laptop pic 1" />
          </div>
          <div>
            <img className="imagei" src={d} alt="Laptop pic 2" />
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Slider;
