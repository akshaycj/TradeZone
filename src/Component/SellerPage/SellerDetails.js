import React, { Component } from 'react'
import { db } from '../../config'
import { Spin } from 'antd'
export default class SellerDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      phone: '',
      companyName: '',
      yearOfEstab: '',
      liscenceNo: '',
      staffNo: '',
      vatNo: '',
      companyAddr: '',
      aboutCompany: '',
      location: '',
      url: '',
      spin: true
    }
  }
  componentDidMount() {
    var that = this
    db.ref('users')
      .child(this.props.match.params.id)
      .child('details')
      .on('value', function (data) {
        var common = data.val()

        that.setState({
          spin: false,
          name: common.name,
          email: common.email,
          phone: common.phone,
          companyName: common.companyName,
          yearOfEstab: common.yearOfEstab,
          liscenceNo: common.liscenceNo,
          staffNo: common.staffNo,
          vatNo: common.vatNo,
          companyAddr: common.companyAddr,
          aboutCompany: common.aboutCompany,
          location: common.location,
          url: common.url
        })
      })
  }
  render() {
    return (
      <div>
        {this.state.spin ? (
          <div
            style={{
              display: 'flex',
              margin: 'auto',
              height: '100vh',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Spin />
          </div>
        ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: '60vh'
              }}
            >
              <div >
                <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "100px" }}>Email</span>
                <span style={{ fontSize: '20px', fontWeight: '500', marginRight: "100px" }}>:</span>
                <span style={{ fontSize: '20px', fontWeight: '500' }}> {this.state.email}</span>
              </div>
              <div>
                <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "100px" }}>CompanyName</span>
                <span style={{ fontSize: '20px', fontWeight: '500', marginRight: "100px" }}>:</span>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{this.state.companyName}</span>
              </div>
              <div>
                <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "100px" }}>Phone:</span>
                <span style={{ fontSize: '20px', fontWeight: '500', marginRight: "100px" }}>:</span>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{this.state.phone}</span>
              </div>
              <div>
                <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "100px" }}>Location:</span>
                <span style={{ fontSize: '20px', fontWeight: '500', marginRight: "100px" }}>:</span>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{this.state.location}</span>
              </div>
              <div>
                <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "100px" }}>Company Address:</span>
                <span style={{ fontSize: '20px', fontWeight: '500', marginRight: "100px" }}>:</span>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{this.state.companyAddr}</span>
              </div>
              <div>
                <span style={{ fontSize: '18px', fontWeight: '900', marginRight: "100px" }}>AboutCompany:</span>
                <span style={{ fontSize: '20px', fontWeight: '500', marginRight: "100px" }}>:</span>
                <span style={{ fontSize: '20px', fontWeight: '500' }}>{this.state.aboutCompany}</span>
              </div>
            </div>
          )}
      </div>
    )
  }
}
