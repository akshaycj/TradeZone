import React, { Component } from "react";
import { AutoComplete, Icon,Input } from "antd";
import { db } from "../../config";

const Option = AutoComplete.Option;

export default class extends Component {
  state = {
    result: [],
    value:''
  };

  handleSearch = value => {
      this.setState({value})
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
   
    return (
      <div className="search">
        <AutoComplete
        dataSource={this.state.result}
          style={{ width: "100%" }}
          onSearch={this.handleSearch}
          placeholder="Search"
          
        >
        <Input value={this.state.value} onPressEnter={this.props.onClickSearchButton}></Input>
        </AutoComplete>
      </div>
    );
  }
}
