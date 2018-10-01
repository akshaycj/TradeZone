import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import AddProduct from "./Addproduct/Addproduct";
import OverView from "./Overview";
import Manage from "./Manage";
import Profile from "./Profile"
export default class extends Component {
  render() {
    return (
      <div>
        <Main>
          <Switch>
            <Route path="/account" exact component={OverView} />
            <Route path="/account/add" component={AddProduct} />
            <Route path="/account/manage" component={Manage} />
            <Route path="/account/profile" component={Profile} />
          </Switch>
        </Main>
      </div>
    );
  }
}
