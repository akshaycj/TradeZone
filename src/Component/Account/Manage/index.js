import React, { Component } from "react";
import "./index.css";
import { db } from "../../../config";
import { List, Avatar, Button, Skeleton } from "antd";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true
    };
  }
  componentDidMount() {
    db.ref("users")
      .child("aYjX8BD4w5SADTlnTQB3pl13HKJ2")
      .on(
        "value",
        function(dataSnap) {
          var data = [];
          dataSnap.forEach(element => {
            data.push(element.val());
          });

          this.setState({ products: data, loading: false });
        }.bind(this)
      );
  }
  render() {
    return (
      <div>
        <List
          className="demo-loadmore-list"
          loading={this.state.loading}
          itemLayout="horizontal"
          dataSource={this.state.products}
          renderItem={item => (
            <List.Item actions={[<a>edit</a>, <a>more</a>]}>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={<a href="https://ant.design">{item.productName}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
