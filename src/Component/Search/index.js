import React, { Component } from "react";
import { AutoComplete, Icon } from "antd";
import { db } from "../../config";

const Option = AutoComplete.Option;

export default class extends Component {
  state = {
    result: []
  };

  handleSearch = value => {
    let result = [];
    db.ref("products")
      .orderByChild("productName")
      .startAt(value)
      .endAt(value + "\uf8ff")
      .once(
        "value",
        function(data) {
          data.forEach(element => {
            result.push(element.val().productName);
          });

          this.setState({ result });
        }.bind(this)
      );
      this.props.recieveSearchWord(value)
  };
  render() {
    const { result } = this.state;
    const children = result.map(name => {
      return <Option key={name}>{name}</Option>;
    });
    return (
      <div className="search">
        <AutoComplete
          style={{ width: "100%" }}
          onSearch={this.handleSearch}
          placeholder="Search"
        >
          {children}
        </AutoComplete>
      </div>
    );
  }
}
