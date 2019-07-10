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

    var link = "/product/" + this.props.value.key
    this.setState({ link: link })
  }
  render() {
    return (
      <div className="recent-card">
        <img alt="" src={this.props.value.urls[0]} style={{ margin: 5 }} width="90%" height={180} />

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
            {this.props.value.productName}
          </h3>

        </div>

        <div className="common-button app-accent" onClick={() => { this.props.showModal(this.props.value.key) }}>
          Edit
        </div>
        <div className="common-button app-accent" style={{ marginTop: '10px' }} onClick={() => { this.props.onDelete(this.props.value.key) }}>
          Delete
        </div>
      </div>
    );
  }
}
