import React, { Component } from "react";
import { AutoComplete, Input } from "antd";
import { db } from "../../config";

export default class extends Component {
  state = {
    result: [],
    value: ''
  };

  componentDidMount = () => {
    this.setState({
      result: []
    })
  }

  handleSearch = value => {
    let result = [];
    this.setState({
      result: result
    })
    db.ref("products")
      .orderByChild("productName")
      .startAt(value.toUpperCase())
      .endAt(value.toUpperCase() + "\uf8ff")
      .once(
        "value",
        function (data) {
          console.log(data.val())
          data.forEach(element => {
            result.push(element.val().productName);
          });
          this.setState({ result });
          console.log("result", result)
        }.bind(this)
      );
  };
  onSelectingValue = (value) => {
    this.props.recieveSearchWord(value)
    this.setState({ value })
  }
  render() {

    return (
      <div className="search">
        <AutoComplete
          dataSource={this.state.result}
          style={{ width: "100%" }}
          onSearch={this.handleSearch}
          placeholder="Search"
          onSelect={this.onSelectingValue}
        >
          <Input value={this.state.value} onPressEnter={this.props.onClickSearchButton}></Input>
        </AutoComplete>
      </div>
    );
  }
}
