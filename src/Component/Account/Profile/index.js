import React, { Component } from 'react'
import "./index.css"
import {Input,Icon,Button} from "antd"

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "sam",
          company: "GOT",
          email: "winteriscoming@gmail.com",
          phone: "9444333333"
        };
      }
  render() {
    return (
      <div style={{display:"flex",flexDirection:"column",margin:"auto",justifyContent:"center"}}>
      <h1>PROFILE</h1>
         <Input
              style={{ width: "360px", margin: "10px" }}
              addonBefore={
                <div>
                  <Icon
                    style={{ fontSize: "23px" }}
                    type="user"
                    theme="outlined"
                  />
                  Name
                </div>
              }
              defaultValue={this.state.name}
            />
            <Input
              style={{ width: "360px", margin: "10px" }}
              addonBefore={
                <div>
                  <Icon
                    style={{ fontSize: "23px" }}
                    type="mail"
                    theme="outlined"
                  />
                  Email
                </div>
              }
              defaultValue={this.state.email}
            />
            <Input
              style={{ width: "360px", margin: "10px" }}
              addonBefore={
                <div>
                  <Icon
                    style={{ fontSize: "23px" }}
                    type="mobile"
                    theme="outlined"
                  />
                  Phone
                </div>
              }
              defaultValue={this.state.phone}
            />
            <Button style={{width:"200px",margin:"auto"}}>Update  </Button>
            
        
          </div>
    
    )
  }
}
