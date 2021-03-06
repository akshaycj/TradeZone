import React, { Component } from "react";
import "./index.css";
import Recent from "./Recent";
import { db } from '../../../config';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recent: [],
      spin: false
    }
  }
  componentDidMount() {
    var thus = this
    db.ref("products").
      limitToLast(5).on("value", function (data) {
        data.forEach(i => {
          thus.state.recent.push({ data: i.val(), key: i.key })
        })
        thus.setState({ spin: true })
      })
  }

  render() {


    return (
      <div >
        {this.state.spin ? <div className="recents">
          {this.state.recent.reverse().map((o, index) => (
            <Recent value={o} key={index} />
          ))}
        </div> : null}

      </div>
    );
  }
}
