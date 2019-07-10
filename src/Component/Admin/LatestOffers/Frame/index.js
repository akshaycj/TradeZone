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
    this.props.onRemoveItem(a)
  }
  render() {
    return (
      <div className="recent-card">
        <img alt="" src={this.props.data.url} style={{ margin: 5 }} width="90%" height={180} />

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
            {this.props.data.name}
          </h3>

        </div>
        <div className="common-button app-accent" onClick={() => { this.onClickRemove(this.props.data.name) }}>

          Remove
        </div>
      </div>
    );
  }
}
