import React, { Component } from "react";
import Header from "./Component/Header";
import "./Component/Header.css";
import "./App.css";
import Product from "./Component/Product/Product";
import Home from "./Component/Home/Home.js";
import Login from "./Component/Login/Login.js";
import AddProduct from "./Component/Addproduct/Addproduct";
import Footer from "./Component/Home/Footer";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Layout from "./Component/Layout";
import Account from "./Component/Account";
import Fillter from "./Component/Fillter";

console.log("b" + "a" + +"a" + "a");

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/product" component={Product} />
              <Route path="/login" component={Login} />
              <Route path="/add" component={AddProduct} />
              <Route path="/account" component={Account} />
              <Route path="/search" component={Fillter} />
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
