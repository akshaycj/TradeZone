import React, { Component } from "react";
import { Card,Icon } from "antd";
import "./Slider.css";
import Slider from "react-slick";

import a from "./pics/1.jpg";
import b from "./pics/2.jpg";
import c from "./pics/3.jpg";
import d from "./pics/4.jpg";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class Slider1 extends Component {
  render() {
    const SampleNextArrow = props => {
      const { className, style, onClick } = props;
      return (
        <Icon
          className={className}
          type="caret-right"
          style={{
            color: "#2196f3",
            display: "block",
            ...style,
            fontSize: 22
          }}
          onClick={onClick}
        />
      );
    };
    
    const SamplePrevArrow = props => {
      const { className, style, onClick } = props;
      return (
        <Icon
          className={className}
          type="caret-left"
          style={{
            color: "#2196f3",
            display: "block",
            ...style,
            fontSize: 22
          }}
          onClick={onClick}
        />
      );
    };
    const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
    };
    return (
      <div className="cardi">
       <Slider {...settings}>          <div>
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
        </Slider>
      </div>
    );
  }
}

export default Slider1;
