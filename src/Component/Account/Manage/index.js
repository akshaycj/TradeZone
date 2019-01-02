import React, { Component } from "react";
import "./index.css";
import { db, Auth } from "../../../config";
import { List, Avatar, Button, Skeleton, Icon, Popconfirm } from "antd";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      uid: ""
    };
  }
  componentDidMount() {
    var that = this;
    Auth.onAuthStateChanged(
      function(user) {
        if (user) {
          console.log("user", user.uid);
          this.setState({ uid: user.uid });
          db.ref("users")
            .child(this.state.uid).child("products")
            .on(
              "value",
              function(dataSnap) {
                var data = [];
                dataSnap.forEach(element => {
                  var d = {
                    productName: element.val().name,
                    key: element.key,
                    urls: element.val().urls
                  };
                  data.push(d);
                });

                this.setState({ products: data, loading: false });
              }.bind(this)
            );
        }
      }.bind(this)
    );
  }
  onDelete = key => {
    db.ref("users")
      .child(this.state.uid)
      .child(key)
      .remove();
    db.ref("products")
      .child(key)
      .remove();
  };
  render() {
    return (
      <div>
        <h2>Manage your products:</h2>
        <br />
        {this.state.products ? (
          <List
            className="demo-loadmore-list"
            loading={this.state.loading}
            itemLayout="horizontal"
            dataSource={this.state.products}
            renderItem={item => (
              <List.Item
                actions={[
                  <Popconfirm
                    title="Are you sure？"
                    okText="Yes"
                    cancelText="No"
                    onConfirm={this.onDelete.bind(this, item.key)}
                  >
                    <Icon type="delete" style={{ fontSize: 18 }} />
                  </Popconfirm>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar src={item.urls[0] || ""} />}
                  title={<a href="https://ant.design">{item.productName}</a>}
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
                />
              </List.Item>
            )}
          />
        ) : (
          <h2>No Products</h2>
        )}
      </div>
    );
  }
}
