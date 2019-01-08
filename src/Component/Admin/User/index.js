import React, { Component } from 'react'
import {Input,Button} from 'antd';
import {connect } from "react-redux";
import {db,Auth} from '../../../config';
import {SignUpSellerAction} from '../../Actions/SignUp'
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
          aboutCompany:"",
          location:""
        }
    }
    onChangeField =(e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    setUser = () => {
      this.props.SignUpSellerAction( 
        this.state.email,
        this.state.password,
        this.state.name,
        this.state.phone,
        this.state.companyName ,
        this.state.yearOfEstab ,
        this.state.liscenceNo ,
        this.state.staffNo ,
        this.state.vatNo,
        this.state.companyAddr,
        this.state.aboutCompany,
        this.state.location,
        true
      )
      };
  render() {
    return (
      <div className="admin-signup">
                    <Input
                    name="name"
                    placeholder="Name"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="phone"
                    placeholder="Phone"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="email"
                    placeholder="Email"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    style={{ width: "90%", margin: "10px", borderRadius: 15 }}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="companyName"
                    placeholder="Company Name"
                    style={{width : "90%" , margin: "auto" , borderRadius : 15}}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="yearOfEstab"
                    placeholder="Year Of Establishment"
                    style={{width: "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="liscenceNo"
                    placeholder="Commercial Liscence Number"
                    style={{width : "90%" , margin : "auto" , borderRadius :15}}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="staffNo"
                    placeholder="No of Staff"
                    style={{width: "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onChangeField}                  />
                  <Input
                    name="vatNo"
                    placeholder="Vat No"
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onChangeField}                  />
                    <Input
                    name="location"
                    placeholder="Location"
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onChangeField}                  />
                  <TextArea
                  name="companyAddr"
                    placeholder="Company Address"
                    autosize={{ minRows: 3, maxRows: 6 }}
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onChangeField}                  />
                  <TextArea
                    name="aboutCompany"
                    placeholder="About the Company"
                    autosize={{ minRows: 3, maxRows: 6 }}
                    style={{width : "90%" , margin : "10px" , borderRadius : 15}}
                    onChange={this.onChangeField}                  />
        <Button onClick={this.setUser} style={{width:'40%',alignSelf:'center'}}>Add User</Button>
      </div>
    )
  }
}

const mapStateToProps = state =>({
    data:state
})
const mapActionsToProps = {
  SignUpSellerAction:SignUpSellerAction,

}
export default connect(mapStateToProps,mapActionsToProps)(SignUp)