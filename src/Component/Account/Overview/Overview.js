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
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Name :</div>
                <Input value={this.state.name} name="name" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Email :</div>
                <Input value={this.state.email} name="email" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>CompanyName :</div>
                <Input value={this.state.companyName} name="companyName" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Mobile :</div>
                <Input value={this.state.phone} name="phone" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Liscence No :</div>
                <Input value={this.state.liscenceNo} name="liscenceNo" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Staff No :</div>
                <Input value={this.state.staffNo} name="staffNo" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Vat No :</div>
                <Input value={this.state.vatNo} name="vatNo" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Year Of Estb :</div>
                <Input value={this.state.yearofEstab} name="yearofEstab" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Location :</div>
                <Input value={this.state.location} name="location" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>Company Address :</div>
                <Input value={this.state.companyAddr} name="companyAddr" onChange={this.changeField} />
              </div>
              <div className="inputAndTextInUpdate">
                <div style={{ width: "15%" }}>About Company :</div>
                <Input value={this.state.aboutCompany} name="aboutCompany" onChange={this.changeField} />
              </div>
              <Button type='primary' onClick={this.updateValue} style={{ width: '30%' }}>Update value</Button>

            </div> :
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: "space-between" }}>
                <div style={{ width: "90%", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: "space-around", height: '100vh', padding: "10px" }}>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", textAlign: "left", fontSize: '18px', fontWeight: '900' }}>Name</div>
                    <div style={{ textAlign: "left", fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.name}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>Email</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.email}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>CompanyName</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.companyName}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>Phone</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.phone}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>LiscenceNo</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.liscenceNo}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>No of staff</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.staffNo}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>Vat No</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.vatNo}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>Year of Establishment</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.yearofEstab}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>Location</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.location}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>Company Address</div>
                    <div style={{ fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.companyAddr}</div>
                  </div>
                  <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <div style={{ width: "200px", fontSize: '18px', fontWeight: '900', textAlign: "left" }}>AboutCompany</div>
                    <div style={{ width: "500px", fontSize: '20px', fontWeight: '500', textAlign: "left" }}>: {this.state.aboutCompany}</div>
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