import React, { Component } from "react";
import "./Component/Header.css";
import "./App.css";
import Product from "./Component/Product/Product";
import Home from "./Component/Home/Home.js";
import Login from "./Component/Login/Login.js";
import SignUpForSeller from "./Component/SignUpForSeller";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "./Component/Layout";
import Account from "./Component/Account";
import Fillter from "./Component/Fillter";
import Seller from "./Component/SellerPage";
import Admin from "./Component/Admin/index";
import SellerSignup from "./Component/SellerSignup";
import SearchResult from './Component/SearchResult/SearchResult';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search/:id" exact component={SearchResult} />
              <Route path="/login" component={Login} />
              <Route path="/account" render={props => <Account {...props} />} />
              <Route path="/search" component={Fillter} />
              <Route path="/authUser" component={Admin} />
              <Route path="/seller/:id" component={Seller} />
              <Route path="/signup/seller" component={SignUpForSeller} />
              <Route path="/product/:id" component={Product} />
              <Route path="/sellerSign" component={SellerSignup} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
