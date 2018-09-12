import React, { Component } from "react";
import "./index.css";
import a from "../../pics/watch.jpg";
import { Link } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div className="recent-card">
        <img src={a} style={{ margin: 5 }} width="90%" height={180} />

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
            Title
          </h3>
          <h4
            style={{
              color: "#999"
            }}
          >
            Description
          </h4>
        </div>
        <div className="common-button app-accent">
          <Link to="/product" style={{ color: "white" }}>
            View
          </Link>
        </div>
      </div>
    );
  }
}
