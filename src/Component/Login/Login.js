import React, { Component } from 'react'
import './Login.css';
import a from '../pics/tradeZone.png';
import { Input, Button, Icon } from 'antd';
import '../SignUp/SignUp.css';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true,
      show:true,
      email:'',
      password:'',
      phone:'',

    }
  }

  closeLogin() {
    this.setState({login:false})
    this.props.value(this.state.login)
  }
  showsignup() {
    this.setState({ show : false })
  }
  render() {
    return (
      <div>
        {this.state.show ?
          <div className='backgroundlogin'>
            <div className="login">
              <Icon type="close-circle" theme="outlined" onClick={this.closeLogin.bind(this)} style={{ cursor: 'pointer',alignSelf: 'flex-end', fontSize: '15px', padding: '10px', position: 'absolute' }} />
              <div className='outers'>
                <h1 style={{ color: "rgba(250,125,150)" }}>Login</h1>
                <img src={a} style={{ width: '65%', margin: 'auto', borderRadius: '90px', padding: '0' }} />
                <span style={{ margin: 'auto', display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'space-evenly' }}>
                  <Input placeholder='Email' style={{ width: '90%', margin: 'auto', borderRadius: 15 }} />
                  <Input placeholder='Password' style={{ width: '90%', margin: 'auto', borderRadius: 15 }} />
                </span>
                <Button type='primary'  style={{ width: '40%', margin: 'auto', borderRadius: 15 }}>Login</Button>
              <div onClick={this.showsignup.bind(this)}>Not a user?SignUp</div>  
         </div>
            </div>
          </div>
          :
          <div className='backgroundlogin'>
          <div className="signup">
              <Icon type="close-circle" theme="outlined" onClick={this.closeLogin.bind(this)} style={{ cursor: 'pointer',alignSelf: 'flex-end', fontSize: '15px', padding: '10px', position: 'absolute' }} />
            <div className='outersofsignup'>
              <h1 style={{ color: "rgba(250,125,150)" }}>SignUp</h1>
              <img src={a} style={{ width: '60%', margin: 'auto', borderRadius: '90px', padding: '0' }} />
              <span style={{ margin: 'auto', display: 'flex', flexDirection: 'column', height: '40%', justifyContent: 'space-evenly' }}>
                <Input placeholder='Name' style={{ width: '90%', margin: 'auto', borderRadius: 15 }} />
                <Input placeholder='Phone' style={{ width: '90%', margin: 'auto', borderRadius: 15 }} />
                <Input placeholder='Email' style={{ width: '90%', margin: 'auto', borderRadius: 15 }} />
                <Input placeholder='Password' style={{ width: '90%', margin: 'auto', borderRadius: 15 }} />
                <Input placeholder='Password' style={{ width: '90%', margin: 'auto', borderRadius: 15 }} />

              </span>
              <Button type='primary' style={{ width: '40%', margin: 'auto', borderRadius: 15 }}>SignUp</Button>
            </div>
          </div>
          </div>
          }
      </div>
    )
  }
}
