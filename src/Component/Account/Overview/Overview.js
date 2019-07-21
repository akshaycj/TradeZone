import React, { Component } from "react";
import "./index.css";

import { db, Auth } from '../../../config';
import { Spin, Button, Input } from 'antd';
import { connect } from 'react-redux';

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      email: "",
      name: "",
      url: '',
      phone: "",
      companyName: "",
      yearofEstab: "",
      liscenceNo: "",
      staffNo: "",
      vatNo: "",
      companyAddr: "",
      aboutCompany: "",
      location: '',
      spin: true,
      updateMode: false
    }
  }
  onClickUpdate = () => {
    this.setState({ updateMode: true })
  }
  changeField = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  updateValue = () => {
    console.log(this.state);

    var that = this
    var d = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      companyName: this.state.companyName,
      yearofEstab: this.state.yearofEstab,
      liscenceNo: this.state.liscenceNo,
      staffNo: this.state.staffNo,
      vatNo: this.state.vatNo,
      companyAddr: this.state.companyAddr,
      aboutCompany: this.state.aboutCompany,
      location: this.state.location,
      url: this.state.url
    };
    db.ref("users")
      .child(this.state.userid).child("details")
      .set(d).then(value => {
        that.setState({ updateMode: false })
      })
  }
  componentDidMount() {
    var that = this
    Auth.onAuthStateChanged(function (user) {
      if (user) {
        console.log(user.uid);

        that.setState({ userid: user.uid })
        db.ref("users").child(user.uid).child("details").on("value", function (data) {
          var common = data.val()

          that.setState({
            spin: false, name: common.name, email: common.email, phone: common.phone,
            companyName: common.companyName,
            yearofEstab: common.yearofEstab,
            licenseNo: common.liscenceNo,
            staffNo: common.staffNo,
            vatNo: common.vatNo,
            companyAddr: common.companyAddr,
            aboutCompany: common.aboutCompany,
            url: common.url,
            location: common.location
          })
        })
      }
    })


  }
  render() {

    return (
      <div>
        {this.state.spin ? <div style={{ display: 'flex', margin: 'auto', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
          <Spin />
        </div> :
          <div>
            {this.state.updateMode ? <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
              <Input value={this.state.name} name="name" onChange={this.changeField} />
              <Input value={this.state.email} name="email" onChange={this.changeField} />
              <Input value={this.state.companyName} name="companyName" onChange={this.changeField} />
              <Input value={this.state.phone} name="phone" onChange={this.changeField} />
              <Input value={this.state.liscenceNo} name="liscenceNo" onChange={this.changeField} />
              <Input value={this.state.staffNo} name="staffNo" onChange={this.changeField} />
              <Input value={this.state.vatNo} name="vatNo" onChange={this.changeField} />
              <Input value={this.state.yearofEstab} name="yearofEstab" onChange={this.changeField} />
              <Input value={this.state.location} name="location" onChange={this.changeField} />
              <Input value={this.state.companyAddr} name="companyAddr" onChange={this.changeField} />
              <Input value={this.state.aboutCompany} name="aboutCompany" onChange={this.changeField} />

              <Button type='primary' onClick={this.updateValue} style={{ width: '30%' }}>Update value</Button>

            </div> :
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                <div style={{ width: "80%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: "space-around", height: '100vh', padding: "10px" }}>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "30%" }}>Name :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}> {this.state.name}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "31.5%" }}>Email:</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}> {this.state.email}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "17%" }}>CompanyName :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>{this.state.companyName}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "30%" }}>Phone :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>{this.state.phone}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "23%" }}>LiscenceNo :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}> {this.state.liscenceNo}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "25%" }}>No of staff :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}> {this.state.staffNo}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "30%" }}>Vat No :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}> {this.state.vatNo}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "9%" }}>Year of Establishment :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}> {this.state.yearofEstab}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "27%" }}>Location :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>{this.state.location}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "13%" }}>Company Address :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>{this.state.companyAddr}</span>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "17%" }}>AboutCompany :</span>
                    <span style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>{this.state.aboutCompany}</span>
                  </div>
                </div>
                <div>
                  <Button type='ghost' onClick={this.onClickUpdate}>Update</Button>
                </div>
              </div>
            }
          </div>}
      </div>
    )
  }
}
export default Overview;