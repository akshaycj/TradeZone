import React, { Component } from "react";
import "./index.css";
import Block from "../Block";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Icon,Spin } from "antd";
import i from "../pics/watch.jpg";
import {db} from '../../../config';


export default class extends Component {
  constructor(props){
    super(props)
    this.state={
      data:[],
      load:true

    }
  }

  componentDidMount(){
    var that = this
    db.ref("featuredProducts").on("value",function(data){
        data.forEach(y=>{
          that.state.data.push({value:y.val(),key:y.key})
          
        })
        that.setState({load:false})
        
      })
  }
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
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    
    return (
      <div>
        <h1>Featured Products</h1>
        {this.state.load ? <Spin/>: 
       <div className="featured-main">
          <Slider {...settings}>
           {this.state.data.map(l =>(
             <div>
            
           <Link to={"/product/"+l.key}> <Block name={l.value.productName} pic={l.value.urls[0]} /></Link>
             </div>
           ))}
          </Slider>
        </div>
        
      }
      </div>
    );
  }
}
