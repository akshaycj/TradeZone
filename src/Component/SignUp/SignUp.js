import React, { Component } from 'react'
import a from '../pics/tradeZone.png';
import {Input, Button} from 'antd';
import './SignUp.css';
export default class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <div className='outersofsignup'>
      <h1 style={{color:"rgba(250,125,150)"}}>SignUp</h1>
        <img src={a} style={{width:'60%',margin:'auto',borderRadius:'90px',padding:'0'}}/>
        <span style={{margin:'auto',display:'flex',flexDirection:'column',height:'20%',justifyContent:'space-evenly'}}>
        <Input placeholder='Name'  style={{width:'90%',margin:'auto',borderRadius:15,backgroundColor:'#e3e3e3'}}/>
        <Input placeholder='Phone' style={{width:'90%',margin:'auto',borderRadius:15,backgroundColor:'#e3e3e3'}}/>
        <Input placeholder='Email' style={{width:'90%',margin:'auto',borderRadius:15,backgroundColor:'#e3e3e3'}}/>
        
        </span>
        <Button type='primary' style={{width:'40%',margin:'auto',borderRadius:15}}>SignUp</Button>
        
        </div>
      </div>
    )
  }
}
