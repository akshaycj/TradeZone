import React, { Component } from "react";
import "./index.css";
import Product from "../Home/Recents/Recent";

export default class extends Component {
  render() {
    const items = [];
    for (let i = 0; i < 12; i++) {
      items.push(
        <div style={{ marginTop: 2 }}>
          <Product />
        </div>
      );
    }
    return (
      <div className="filter-main-container">
        <div className="sort-container">.</div>
        <div className="product-container">{items}</div>
      </div>
    );
  }
}
