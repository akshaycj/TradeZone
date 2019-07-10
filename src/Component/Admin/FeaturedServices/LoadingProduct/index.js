import React, { Component } from "react";
import "./index.css";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    }
  }
  componentDidMount() {
  }
  onClickRemove = (a) => {
    this.props.RemoveItem(a)
  }
  onClickProd = (q) => {
    this.props.clickProd(q)

  }
  render() {
    return (
      <div className="recent-card" onClick={() => { this.onClickProd(this.props.data) }}>
        <img alt="" src={this.props.data.value.urls[0]} style={{ margin: 5 }} width="90%" height={180} />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            marginLeft: 5,
            width: "100%"
          }}
        >
          <h3
            style={{
              fontWeight: 18
            }}
          >
            {this.props.data.value.productName}
          </h3>

        </div>

      </div>
    );
  }
}
