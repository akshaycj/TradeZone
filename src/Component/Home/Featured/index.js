import React, { Component } from "react";
import "./index.css";
import Block from "../Block";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import i from "../pics/watch.jpg";

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
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />
};

export default class extends Component {
  render() {
    return (
      <div>
        <Slider {...settings}>
          <Link to="/product">
            <Block name={"Watch"} text={"Loren Ipsum"} pic={i} price={250} />
          </Link>
          <Link to="/product">
            <Block name={"Watch"} text={"Loren Ipsum"} pic={i} price={250} />
          </Link>
          <Link to="/product">
            <Block name={"Watch"} text={"Loren Ipsum"} pic={i} price={250} />
          </Link>
          <Link to="/product">
            <Block name={"Watch"} text={"Loren Ipsum"} pic={i} price={250} />
          </Link>
        </Slider>
      </div>
    );
  }
}
