import React, { Component } from "react";
import { Card,Icon } from "antd";
import "./Slider.css";
import Slider from "react-slick";
import { db } from '../../config';
import {Spin} from 'antd';

import a from "./pics/1.jpg";
import b from "./pics/2.jpg";
import c from "./pics/3.jpg";
import d from "./pics/4.jpg";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

class Slider1 extends Component {
  constructor(props){
    super(props);
    this.state={
        urls:[],
        spin:true
    }
}
componentDidMount(){
    var that = this
    db.ref('topBanner').on("value",function(data){
        var urls = []
        data.forEach(p=>{
            urls.push(p.val().url)
        })
        that.setState({urls,spin:false})
    })
}
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
  <div>
  {
      this.state.spin ? <Spin/> : <div>
          
      
    <Slider {...settings} style={{margin:'10px'}}>
      {
          this.state.urls.map(t=>(
        <img className="imagei" src={t} alt="mobile pic 1" style={{width:'100%'}} />
          ))
      }
   
      
    </Slider>
      </div>
  }
  </div>
)
}
}

export default Slider1;
