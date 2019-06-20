import React, { Component } from "react";
import "./index.css";
export default class extends Component {
  constructor(props){
    super(props);
    this.state={
      link:""
    }
  }
  componentDidMount(){
  }
  onClickRemove = (a) => {
    this.props.RemoveItem(a)
  }
  render() {
    return (
      <div className="recent-card">
        <img src={this.props.data.urls[0]} alt="" style={{ margin: 5 }} width="90%" height={180} />

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
            {this.props.data.productName}
          </h3>

        </div>
        <div className="common-button app-accent" onClick={()=>{this.onClickRemove(this.props.data.uid)}}>
         
            Remove
        </div>
      </div>
    );
  }
}
