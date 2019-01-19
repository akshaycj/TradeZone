import React, { Component } from "react";
import "./index.css";
import a from "../../pics/watch.jpg";
import { Link } from "react-router-dom";
import  {db } from '../../../../config';
export default class extends Component {
  constructor(props){
    super(props);
    this.state={
      link:""
    }
  }
  componentDidMount(){
   var link = "/product/" + this.props.value.key
   this.setState({link:link})
  }
  render() {
    return (
      
      <div className="recent-card">
      <Link to={this.state.link} style={{ color: "white" }}>
        <img src={this.props.value.data.urls[0]} style={{ margin: 5 }} width="90%" height={180} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: 5,
            width: "100%"
          }}
        >
          <h3
            style={{
              fontWeight: 18
            }}
          >
            {this.props.value.data.productName}
          </h3>

        </div>
       
          </Link>
      </div>
    );
  }
}
