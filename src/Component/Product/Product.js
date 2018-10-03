import React from "react";
import { Rate, Button, Card, Icon } from "antd";
import "./Product.css";
import w from "./watch.jpg";
import { Auth, db } from "../../config";
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: false,
      loginState: false,
      displayMessage: false,
      phone: "65465464654",
      email: "",
      loginStateforContact: false
    };
  }
  componentDidMount() {}
  changeHeart() {
    this.setState({
      heart: !this.state.heart
    });
  }
  onGetPhoneNo() {
    var that = this;
    Auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ loginState: true });
        db.ref("users")
          .child(user.uid + "")
          .on("value", function(data) {
            console.log(data.val());
            that.setState({ phone: data.val().phone });
          });
      } else {
        this.setState({ displayMessage: true });
      }
    });
  }
  onContactClick() {
    var that = this;
    Auth.onAuthStateChanged(user => {
      if (user) {
        db.ref("users")
          .child(user.uid + "")
          .on("value", function(data) {
            that.setState({ email: data.val().email });
          });
        this.setState({ loginStateforContact: true });
      } else {
        this.setState({ displayMessage: true });
      }
    });
  }
  render() {
    return (
      <div className="product">
        <Card className="card">
          <div className="details">
            <div className="productpic">
              <div className="bigpic">
                <img src={w} style={{ width: "100%" }} />
              </div>
              <div className="smallpics">
                <img src={w} style={{ width: "33%" }} />
                <img src={w} style={{ width: "33%" }} />
                <img src={w} style={{ width: "33%" }} />
              </div>
            </div>
            <div className="description">
              <span className="name">
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <h1 style={{ marginBottom: "0px" }}>Watch-Marius</h1>
                  <Rate style={{ float: "left", display: "inline-block" }} />
                </span>
                <span>
                  {this.state.heart ? (
                    <Icon
                      type="heart"
                      style={{ fontSize: "25px", color: "red" }}
                      onClick={this.changeHeart.bind(this)}
                    />
                  ) : (
                    <Icon
                      type="heart-o"
                      style={{ fontSize: "25px" }}
                      onClick={this.changeHeart.bind(this)}
                    />
                  )}
                  <Icon type="share-alt" style={{ fontSize: "25px" }} />
                </span>
              </span>
              <div className="rate">
                <h3>Price</h3>
                <h2>240.00</h2>
              </div>
              <div className="textval">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
              <div style={{ display: "flex", marginTop: "3%" }}>More</div>
              <div className="bottomBut">
                {this.state.loginState ? (
                  <div className="phoneNo">
                    Phone No:
                    {this.state.phone}
                  </div>
                ) : (
                  <Button
                    type="primary"
                    ghost
                    style={{ margin: "10px" }}
                    onClick={this.onGetPhoneNo.bind(this)}
                  >
                    View Phone No
                  </Button>
                )}
                {this.state.loginStateforContact ? (
                  <div className="phoneNo">
                    Email:
                    {this.state.email}
                  </div>
                ) : (
                  <Button
                    type="danger"
                    ghost
                    style={{ margin: "10px" }}
                    onClick={this.onContactClick.bind(this)}
                  >
                    Contact seller
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
