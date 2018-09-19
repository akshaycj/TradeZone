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
            </Switch>
          </Layout>
        </Router>
      </div>
    );
  }
}

export default App;
