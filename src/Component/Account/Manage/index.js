import React, { Component } from "react";
import "./index.css";
import { db } from "../../../config";
import { List, Avatar, Button, Skeleton, Icon } from "antd";

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
            <List.Item
              actions={[<Icon type="delete" style={{ fontSize: 18 }} />]}
            >
              <List.Item.Meta
                avatar={<Avatar src={item.urls[0]} />}
                title={<a href="https://ant.design">{item.productName}</a>}
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
