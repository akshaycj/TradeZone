import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    }
  }
  componentDidMount() {
    var link = "/product/" + this.props.value.key
    this.setState({ link: link })
  }
  render() {
    return (

      <div className="recent-card">
        <Link to={this.state.link} style={{ color: "white" }}>
          <img alt="" src={this.props.value.data.urls[0]} style={{ margin: 5 }} width="90%" height={180} />

          <h3
            style={{
              textAlign: "left",
              marginLeft: 5,
              width: "100%",
              fontWeight: 18
            }}
          >
            {this.props.value.data.productName}
          </h3>



        </Link>
      </div>
    );
  }
}
