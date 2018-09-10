import React, { Component } from 'react'
import {Avatar} from 'antd';
import './Overview.css';
import Addproduct from '../Addproduct/Addproduct';
export default class Overview extends Component {
  render() {
    return (
      <div className='overview'>
          <div className='sider'>
            <div className='sellername'>
            <Avatar/>
            <h3 style={{marginLeft:'10px',padding:'5px'}}>UserName</h3>
            </div>
            <div className='sides'><h3>Current Plan</h3></div>
            <div className='sides'><h3>Orders</h3></div>
            <div className='sides'><h3>Manage Products</h3></div>
            <div className='sides'><h3>Edit Account details</h3></div>
            
            <div className='sides'><h3>Plans</h3></div>
            <div className='sides'><h3>Logout</h3></div>

          </div>
          <div className='displaydata'>
          <Addproduct/>
          </div>
        
      </div>
    )
  }
}
