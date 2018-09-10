import React, { Component } from 'react'
import {Input,Radio,Button} from 'antd';

export default class Personalinfo extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:'',
            lastname:'',
            gender:'male',
            email:'',
            phone:''
        }
    }
    componentDidMount(){
        this.setState({firstname:this.props.firstname,lastname:this.props.lastname,gender:this.props.gender,email:this.props.email})
    }
  render() {
    return (
      <div style={{width:'50%'}}>
          <h1 style={{textAlign:'left'}}>Personal Inforamtion</h1>
          <h4 style={{textAlign:'left'}}>Name</h4>
          <Input value={this.state.firstname} onChange={(e)=>{this.setState({firstname:e.target.value})}} />
          <Input value={this.state.lastname} onChange={(e)=>{this.setState({lastname:e.target.value})}} style={{}}/>
          <h4>Gender</h4>
          <Radio.Group onChange={(e)=>{this.setState({gender:e.target.value})}} value={this.state.gender}>
              <Radio value={'male'}>Male</Radio>
              <Radio value={'female'}>Female</Radio>
          </Radio.Group>
          <h4>E-mail</h4>
          <Input value={this.state.email} onChange={(e)=>{this.setState({email:e.target.value})}}/>
          <h4>Phone</h4>
          <Input value={this.state.phone} onChange={(e)=>{this.setState({phone:e.target.value})}}/>
        <Button type='primary'>Save</Button>
      </div>
    )
  }
}