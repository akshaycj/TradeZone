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

class Grid extends React.Component {
  render() {
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
      <div className="sub">
        

        <Featured />
        <br/>
        <br/>
        <div>
        <h1>Latest Offers </h1>
        <Slider {...settings} style={{margin:'10px'}}>
          
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
        </Slider>
        </div>
        <br/>
        <br/>
        
        <Featured />

      </div>
    );
  }
}
export default Grid;
