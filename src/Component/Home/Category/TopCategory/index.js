import React, { Component } from "react";
import "./index.css";
import { Menu, Icon, Spin } from "antd";
import { db } from "../../../../config";
import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categoryList: [],
      List: {},
      spin: true
    }
  }
  componentDidMount() {
    var that = this
    db.ref("category").on("value", function (data) {
      var list = {}
      var category = []
      data.forEach(t => {
        list[t.val()] = []
        category.push(t.val())
        db.ref('products').orderByChild("category").equalTo(t.val()).on("value", function (data) {

          data.forEach(q => {

            list[t.val()].push({ key: q.key, productName: q.val().productName })
          })
          that.setState({ spin: false })
        })

      })
      that.setState({ List: list, categoryList: category })

    })
  }

  render() {

    return (
      <div style={{ paddingTop: 10 }}>
        {
          this.state.spin ? <Spin /> :
            <div>

              <div
                style={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }}
              >
                <h3>Top categories</h3>
                <div className="app-accent" style={{ width: 50, height: 1 }} />
              </div>
              <Menu
                mode="vertical"
                style={{ backgroundColor: "#f7f7f7", border: 0, textAlign: "left", height: "600px", overflowY: "auto", position: "relative" }}
              >{this.state.categoryList.map((op, index) => (
                <SubMenu key={index} title={<span><Icon type="setting" /><span>{op}</span></span>}>
                  {this.state.List[op].map(ty => {
                    var link = '/product/' + ty.key
                    return (
                      <Menu.Item key={ty.key}><Link to={link}>{ty.productName}</Link></Menu.Item>
                    )
                  }
                  )}
                </SubMenu>
              ))
                }
              </Menu>
            </div>
        }
      </div>
    );
  }
}
