import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main";
import SellerProducts from "./SellerProducts";
import SellerDetails from "./SellerDetails";
export default class extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  render() {
    return (
      <div>
        <Main url={this.props.match.url} param={this.props.match.params.id}>
          <Switch>
            <Route path="/seller/:id"  exact component={SellerDetails} />
            <Route path="/seller/:id/products"  component={SellerProducts} />
          </Switch>
        </Main>
      </div>
    );
  }
}
