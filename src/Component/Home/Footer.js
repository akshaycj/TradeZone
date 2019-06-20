import React, { Component } from "react";
import { Icon } from "antd";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="footop">
          <div className="list">
            <h2>ABOUT</h2>
            <span>Contact Us</span>
            <span>About Us</span>
            <span>How we work</span>
          </div>
          <div className="list">
            <h2>HELP</h2>
            <span>Payments</span>
            <span>Shipping</span>
            <span>Cancellation & Reaturns</span>
            <span>FAQ</span>
            <span>Report Infringement</span>
          </div>
          <div className="list">
            <h2>POLICY</h2>
            <span>Return policy</span>
            <span>Terms of Use</span>
            <span>Security</span>
            <span>Privacy</span>
            <span>Sitemap</span>
          </div>
          <div className="list">
            <h2>SOCIAL</h2>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Youtube</span>
            <span>Google Plus</span>
          </div>
          <hr />
          <div className="mail">
            <h2>MAIL US</h2>
            <span>mail@tradezone.com</span>
          </div>
          <div className="address">
            <h2>Address</h2>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </span>
          </div>
        </div>
        <hr />
        <div className="end">
          <span className="one">
            <Icon type="tag" style={{ color: "blue", margin: "2px" }} />
            Sell on TradeZone
          </span>
          <span className="one">
            <Icon
              type="cloud-upload"
              style={{ color: "blue", margin: "2px" }}
            />
            Advertise
          </span>
          <span className="one">
            <Icon
              type="question-circle"
              style={{ color: "blue", margin: "2px" }}
            />
            Help
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
