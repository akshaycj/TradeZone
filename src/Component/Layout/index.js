import React, { Component } from "react";
import "./index.css";
import Header from "../Header";
import Footer from "../Home/Footer";

export default class extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
