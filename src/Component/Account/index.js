import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import AddProduct from "../Addproduct/Addproduct";
import OverView from "./Overview";

export default class extends Component {
  render() {
    return (
      <div>
        <Router>
          <Main>
            <Route path="/" component={OverView} />
          </Main>
        </Router>
      </div>
    );
  }
}
