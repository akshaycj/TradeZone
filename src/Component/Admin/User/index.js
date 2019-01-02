import React, { Component } from 'react'
import {Input,Button} from 'antd';
import {connect } from "react-redux";
import {db,Auth} from '../../../config';
import './index.css';

const {TextArea} = Input;
class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
          email: "",
          password: "",
          phone: "",
          name: "",
          companyName : "",
          yearOfEstab : "",
          liscenceNo : "",
          staffNo : "",
          vatNo : "",
          companyAddr:"",
          aboutCompany:""
        }
    }
    onChangeField =(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    setUser = () => {
        var that = this
        Auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(function(object) {
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
          aboutCompany:this.state.aboutCompany
        };
        db.ref("users")
          .child(object.user.uid).child("detalis")
          .set(d);
        db.ref("users").child(object.user.uid).child("type").set("seller")
        db.ref("AdminAdded").push(object.user.uid)
      })
      };
  render() {
    return (
      <div className="admin-signup">
                    <Input
                    name="name"
                    placeholder="Name"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onName}
                  />
                  <Input
                    name="phone"
                    placeholder="Phone"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onPhone}
                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onEmail}
                  />
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onPassword}
                  />
                  <Input
                    name="companyName"
                    placeholder="Company Name"
                    style={{width : "90%" , margin: "auto" , borderRadius : 15}}
                    onChange={this.onCompanyName}
                  />
                  <Input
                    name="yearOfEstab"
                    placeholder="Year Of Establishment"
                    style={{width: "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onYearOfEstab}
                  />
                  <Input
                    name="licenceNo"
                    placeholder="Commercial Liscence Number"
                    style={{width : "90%" , margin : "auto" , borderRadius :15}}
                    onChange={this.onLisenceNo}
                  />
                  <Input
                    name="staffNo"
                    placeholder="No of Staff"
                    style={{width: "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onStaffNo}
                  />
                  <Input
                    name="vatNo"
                    placeholder="Vat No"
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onVatNo}
                  />
                  <TextArea
                  name="companyAddr"
                    placeholder="Company Address"
                    autosize={{ minRows: 3, maxRows: 6 }}
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onCompanyAddress}
                  />
                  <TextArea
                    name="aboutCompany"
                    placeholder="About the Company"
                    autosize={{ minRows: 3, maxRows: 6 }}
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onAboutCompany}
                  />
        <Button onClick={this.setUser} style={{width:'40%',alignSelf:'center'}}>Add User</Button>
      </div>
    )
  }
}

const mapStateToProps = state =>({
    data:state
})
export default connect(mapStateToProps)(SignUp)