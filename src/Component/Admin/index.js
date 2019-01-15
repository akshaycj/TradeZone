import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import AddProduct from "./Addproduct/Addproduct";
import SignUp from './User';
import Featured from './FeaturedProducts';
import LatestOffers from './LatestOffers/LatestOffers'
import TopBanner from './TopBanner/TopBanner'
import CategoryUpdate from "./CategoryUpdate/CategoryUpdate";
export default class extends Component {  
  render() {
    return (
      <div>
        <Main>
          <Switch>
            <Route path="/authUser"  exact component={SignUp} />
            <Route path="/authUser/featured"  component={Featured} />
            <Route path="/authUser/add"   component={AddProduct} />
            <Route path="/authUser/latest"   component={LatestOffers} />
            <Route path="/authUser/CategoryUpdate"   component={CategoryUpdate} />
            <Route path="/authUser/topBanner"   component={TopBanner} />

          </Switch>
        </Main>
      </div>
    );
  }
}
