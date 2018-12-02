import React, { Component } from 'react'
import {Input,Button} from 'antd';
import {connect } from "react-redux";
import SignUpAction from '../../Actions/SignUp';
import {db,Auth} from '../../../config';
import './index.css';
class SignUp extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"",
            phone:"",
            email:"",
            password:""
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
          name: that.state.name,
          email: that.state.email,
          phone: that.state.phone
        };
        db.ref("usersDetails")
          .child(object.user.uid)
          .set(d);
        db.ref("AdminAdded").push(object.user.uid)
      })
      };
  render() {
    return (
      <div className="admin-signup">
        <Input placeholder="name" name="name"  onChange={this.onChangeField}/>
        <Input placeholder="phone" name="phone" onChange={this.onChangeField}/>

        <Input placeholder="email" name="email" onChange={this.onChangeField}/>
        <Input placeholder="password" name="password" onChange={this.onChangeField}/>
        <Button onClick={this.setUser} style={{width:'40%',alignSelf:'center'}}>Add User</Button>
      </div>
    )
  }
}
const mapActionToProps ={
SignUpAction:SignUpAction
}
const mapStateToProps = state =>({
    data:state
})
export default connect(mapStateToProps,mapActionToProps)(SignUp)