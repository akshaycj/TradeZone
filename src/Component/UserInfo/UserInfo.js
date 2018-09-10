import React from 'react';
import { Card, Avatar } from 'antd';
import './UserInfo.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Personalinfo from './Personalinfo';
export default class UserInfo extends React.Component {
    constructor(props){
        super(props)
        this.state={
            info:true,
        }
    }

    render() {
        return (
            <div className='userinfo'>
                <div className='infotab'>
                    <div className='userName'>
                        <Avatar src='http://4.bp.blogspot.com/-XAMsVxbQsmc/UWv9l7NFdpI/AAAAAAAAIWw/PJasmE7L668/s1600/best+puppies+picture0.jpg'   />
                       <h3 style={{marginLeft:'12px',padding:'3px'}}>UserName</h3>
                    </div>
                    <div className='historyInfo'>
                        <h3 style={{padding:'3px'}}>Buyer History Information</h3>
                    </div>
                    <div className='logoutuser'>
                    <h3>Logout</h3>
                    </div>
                </div>
                
                <div className='info'>
                <Personalinfo/>
                </div>
            </div>
        )
    }
}