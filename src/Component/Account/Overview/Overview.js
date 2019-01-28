import React, { Component } from "react";
import "./index.css";

import {db,Auth } from '../../../config';
import {Spin,Button,Input} from 'antd';
import {connect } from 'react-redux';

 class Overview extends Component {
    constructor(props){
        super(props);
        this.state={
          userid:"",
            email: "",
            name: "",
            url:'',
      phone: "",
      companyName : "",
      yearofEstab : "",
      liscenceNo : "",
      staffNo : "",
      vatNo : "",
      companyAddr:"",
      aboutCompany:"",
      location:'',
      spin:true,
      updateMode:false
        }
    }
    onClickUpdate = () =>{
      this.setState({updateMode:true})
    }
    changeField = (e) =>{
      this.setState({[e.target.name] : e.target.value})
    }
    updateValue = () =>{
      console.log(this.state);
      
      var that = this
      var d = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        companyName:this.state.companyName,
        yearofEstab:this.state.yearofEstab,
        liscenceNo:this.state.liscenceNo,
        staffNo:this.state.staffNo,
        vatNo:this.state.vatNo,
        companyAddr:this.state.companyAddr,
        aboutCompany:this.state.aboutCompany,
        location:this.state.location,
        url:this.state.url
      };
      db.ref("users")
        .child(this.state.userid).child("details")
        .set(d).then(value =>{
          that.setState({updateMode:false})
        })
    }
    componentDidMount(){
      var that = this
      Auth.onAuthStateChanged(function(user){
        if(user){
          console.log(user.uid);
          
          that.setState({userid:user.uid})
          db.ref("users").child(user.uid).child("details").on("value",function(data){
            var common = data.val()
   
            that.setState({spin:false,name:common.name,email:common.email,phone:common.phone,
           companyName : common.companyName,
           yearofEstab : common.yearofEstab,
           liscenceNo : common.liscenceNo,
           staffNo : common.staffNo,
           vatNo : common.vatNo,
           companyAddr:common.companyAddr,
           aboutCompany:common.aboutCompany,
           url:common.url,
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
        </div> : 
        <div> 
        {this.state.updateMode ?  <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100vh'}}>
            <Input   value={this.state.name} name="name" onChange={this.changeField}/>
            <Input  value={this.state.email} name="email" onChange={this.changeField}/> 
            <Input value={this.state.companyName} name="companyName" onChange={this.changeField}/>
            <Input value={this.state.phone} name="phone" onChange={this.changeField}/>
            <Input value={this.state.liscenceNo} name="liscenceNo" onChange={this.changeField}/>
            <Input value={this.state.staffNo} name="staffNo" onChange={this.changeField}/>
            <Input value={this.state.vatNo} name="vatNo" onChange={this.changeField}/>
            <Input value={this.state.yearofEstab} name="yearofEstab" onChange={this.changeField}/>
            <Input value={this.state.location} name="location" onChange={this.changeField}/>
            <Input value={this.state.companyAddr} name="companyAddr" onChange={this.changeField}/>
            <Input value={this.state.aboutCompany} name="aboutCompany" onChange={this.changeField}/>
            
            <Button type='primary' onClick={this.updateValue} style={{width:'30%'}}>Update value</Button>

        </div> : 
        <div  style={{display:'flex',flexDirection:'row'}}>

        
        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:"space-around",height:'100vh'}}>
                <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>Name:</span>
             <span style={{fontSize:'20px',fontWeight:'500'}}> {this.state.name}</span>
            </div>
        <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>Email:</span>
             <span style={{fontSize:'20px',fontWeight:'500'}}> {this.state.email}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>
                CompanyName:
              </span>
              <span style={{fontSize:'20px',fontWeight:'500'}}>{this.state.companyName}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>Phone:</span>
              <span style={{fontSize:'20px',fontWeight:'500'}}>{this.state.phone}</span>
            </div>
          
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>LiscenceNo:</span>
             <span style={{fontSize:'20px',fontWeight:'500'}}> {this.state.liscenceNo}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>No of staff:</span>
             <span style={{fontSize:'20px',fontWeight:'500'}}> {this.state.staffNo}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>Vat No:</span>
             <span style={{fontSize:'20px',fontWeight:'500'}}> {this.state.vatNo}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>Year of Establishment:</span>
             <span style={{fontSize:'20px',fontWeight:'500'}}> {this.state.yearofEstab}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>
                Location:
              </span>
              <span style={{fontSize:'20px',fontWeight:'500'}}>{this.state.location}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>
                Company Address:
              </span>
              <span style={{fontSize:'20px',fontWeight:'500'}}>{this.state.companyAddr}</span>
            </div>
            <div>
              <span style={{ fontSize: '18px', fontWeight: '600' }}>
                AboutCompany:
              </span>
              <span style={{fontSize:'20px',fontWeight:'500'}}>{this.state.aboutCompany}</span>
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