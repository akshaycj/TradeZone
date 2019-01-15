import React, { Component } from 'react'
import { db } from '../../config';
import "./Slider.css";
import './LatestOffers.css';
import Slider from "react-slick";
import {Spin} from 'antd';
export default class LatestOffers extends Component {
    constructor(props){
        super(props);
        this.state={
            urls:[],
            spin:true
        }
    }
    componentDidMount(){
        var that = this
        db.ref('latestOffers').on("value",function(data){
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
              
          
        <h1>Latest Offers </h1>
        <Slider {...settings} style={{margin:'10px'}}>
          {
              this.state.urls.map(t=>(
                <div className="cardi">
            <img className="imagei" src={t} alt="mobile pic 1" style={{width:'100%',height:'100%'}} />
          </div>
              ))
          }
       
          
        </Slider>
          </div>
      }
      </div>
    )
  }
}
