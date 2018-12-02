import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import AddProduct from "./Addproduct/Addproduct";
import SignUp from './User';
import Featured from './FeaturedProducts';
import Profile from "./Profile"
export default class extends Component {
  render() {
    return (
      <div>
        <Main>
          <Switch>
            <Route path="/authUser"  exact component={SignUp} />
            <Route path="/authUser/featured"  component={Featured} />
            <Route path="/authUser/add"   component={AddProduct} />
          </Switch>
        </Main>
      </div>
    );
  }
}
