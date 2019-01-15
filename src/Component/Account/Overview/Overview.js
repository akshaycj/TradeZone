import React, { Component } from "react";
import "./index.css";

import {db,Auth } from '../../../config';
import {Spin} from 'antd';
import {connect } from 'react-redux';

 class Overview extends Component {
    constructor(props){
        super(props);
        this.state={
          
            email: "",
            name: "",
      phone: "",
      companyName : "",
      yearOfEstab : "",
      liscenceNo : "",
      staffNo : "",
      vatNo : "",
      companyAddr:"",
      aboutCompany:"",
      location:'',
      spin:true,
        }
    }
    componentDidMount(){
      var that = this
      Auth.onAuthStateChanged(function(user){
        if(user){
          db.ref("users").child(user.uid).child("details").on("value",function(data){
            var common = data.val()
   
            that.setState({spin:false,name:common.name,email:common.email,phone:common.phone,
           companyName : common.companyName,
           yearOfEstab : common.yearOfEstab,
           liscenceNo : common.liscenceNo,
           staffNo : common.staffNo,
           vatNo : common.vatNo,
           companyAddr:common.companyAddr,
           aboutCompany:common.aboutCompany,
           location:common.location})
       })
        }
      })
    
    
    }
  render() {
    return (
      <div>
      {this.state.spin ? <div style={{display:'flex',margin:'auto',height:'100vh',justifyContent:'center',alignItems:'center'}}>
        <Spin/>
        </div> : <div style={{display:'flex',flexDirection:'column',justifyContent:"space-between",height:'60vh'}}>
        <div>Name:{this.state.name}</div>
        <div>Email:{this.state.email}</div>
        <div>CompanyName:{this.state.companyName}</div>
        <div>Phone:{this.state.phone}</div>
        <div>AboutCompany:{this.state.aboutCompany}</div>
        <div>No of staff:{this.state.staffNo}</div>
        <div>Company Address:{this.state.companyAddr}</div>
        <div>VatNo:{this.state.vatNo}</div>
        <div>Location:{this.state.location}</div>
        <div>LiscenceNo:{this.state.liscenceNo}</div>
        <div>YearOf Establishment:{this.state.yearOfEstab}</div>
        </div>}
      </div>
    )
  }
}
export default Overview;