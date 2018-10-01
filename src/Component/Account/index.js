import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import AddProduct from "./Addproduct/Addproduct";
import OverView from "./Overview";
import Manage from "./Manage";

export default class extends Component {
  render() {
    return (
      <div>
        <Router>
          <Main>
            <Switch>
              <Route path="/" exact component={OverView} />
              <Route path="/account/add" component={AddProduct} />
              <Route path="/account/manage" component={Manage} />
            </Switch>
          </Main>
        </Router>
      </div>
    );
  }
}
