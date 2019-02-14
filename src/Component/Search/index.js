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
      
    let result = [];
    db.ref("products")
      .orderByChild("productName")
      .startAt(value.toUpperCase())
      .endAt(value.toLowerCase() + "\uf8ff")
      .once(
        "value",
        function(data) {
          console.log(data.val())
          data.forEach(element => {
            result.push(element.val().productName);
          });

          this.setState({ result });
        }.bind(this)
      );
  };
  onSelectingValue = (value) =>{
    this.props.recieveSearchWord(value)
    this.setState({value})
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
