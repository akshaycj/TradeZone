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
        </div> : <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:"flex-start",height:'60vh'}}>
                <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>Name:</span>
             <span style={{fontSize:'20px',fontWeight:'600'}}> {this.state.name}</span>
            </div>
        <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>Email:</span>
             <span style={{fontSize:'20px',fontWeight:'600'}}> {this.state.email}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>
                CompanyName:
              </span>
              <span style={{fontSize:'20px',fontWeight:'600'}}>{this.state.companyName}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>Phone:</span>
              <span style={{fontSize:'20px',fontWeight:'600'}}>{this.state.phone}</span>
            </div>
          
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>LiscenceNo:</span>
             <span style={{fontSize:'20px',fontWeight:'600'}}> {this.state.liscenceNo}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>No of staff:</span>
             <span style={{fontSize:'20px',fontWeight:'600'}}> {this.state.staffNo}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>Vat No:</span>
             <span style={{fontSize:'20px',fontWeight:'600'}}> {this.state.vatNo}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>Year of Establishment:</span>
             <span style={{fontSize:'20px',fontWeight:'600'}}> {this.state.yearOfEstab}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>
                Location:
              </span>
              <span style={{fontSize:'20px',fontWeight:'600'}}>{this.state.location}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>
                Company Address:
              </span>
              <span style={{fontSize:'20px',fontWeight:'600'}}>{this.state.companyAddr}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: 500 }}>
                AboutCompany:
              </span>
              <span style={{fontSize:'20px',fontWeight:'600'}}>{this.state.aboutCompany}</span>
            </div>

        </div>}
      </div>
    )
  }
}
export default Overview;