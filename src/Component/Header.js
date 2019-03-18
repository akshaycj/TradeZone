import React from 'react';
import './Header.css';
import { Link,withRouter } from 'react-router-dom';
import { Menu, Dropdown, Icon, Select, Input, Button, Avatar } from 'antd';
import Login from './Login/Login.js';
import Search from './Search';
import i from './pics/icon1.png';
import j from './pics/icon2.png';
import search from './pics/search(1).png';
import { connect } from 'react-redux';

import { Auth, db } from '../config';
import AuthStateAction from './Actions/AuthSate';
import { SignOut } from './Actions/Login';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Option = Select.Option;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
      showSellerSignUp: false,
      redirect: false,
      loggedin: false,
      type: '',
      searchWord:'',
      showSearch:false
    };
  }

  componentDidMount() {
    var that = this;
    Auth.onAuthStateChanged((user) => {
      if (user) {
        that.setState({ loggedin: true, uid: user.uid });
        db
          .ref('users')
          .child(`${user.uid}`)
          .child('type')
          .on('value', function(data) {
            console.log(data.val(), 'here');
            that.setState({ type: data.val() });
          });
      } else {
        //kandoda kunda?
        that.setState({ loggedin: false });
      }
    });
  }
  static getDerivedStateFromProps(props, state){
    if(props.user !== state.user){
      return{
        user:props.user
      }
    }
  }
  getlogin() {
    this.setState({ showLogin: true });
  }

  getSellerLogin() {
    this.setState({ showSellerSignUp: true });
  }

  loginVal(data) {
    this.setState({ showLogin: data });
  }

  sellerLoginVal(dataS) {
    this.setState({ showSellerSignUp: dataS, showLogin: false });
  }

  signUserOut() {
    this.props.SignOut();
    this.props.AuthStateAction();
    this.setState({ loggedin: false });
  }
  recieveSearchWord = (word) =>{
   this.setState({searchWord:word})
  }
  onClickSearchButton = () =>{
    if(this.state.searchWord.length != 0 ){

      this.props.history.push(`/search/${this.state.searchWord}`)
    }
  }
  showSearchFun = () =>{
    this.setState({showSearch:!this.state.showSearch})
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    const menu1 = (
      <Menu>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.alipay.com/"
          >
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.taobao.com/"
          >
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="http://www.tmall.com/"
          >
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    const menuforham = (
      <Menu mode="vertical" style={{ backgroundColor: '#f7f7f7', border: 0 }}>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <MenuItemGroup title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="Iteom 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <SubMenu key="country" title="Country">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="7">Option 9</Menu.Item>
        </SubMenu>
        <SubMenu key="category" title="category">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
          <Menu.Item key="7">Option 9</Menu.Item>
        </SubMenu>
      </Menu>
    );
    const userDropdownMenu = (
      <Menu>
        <Menu.Item>
          {this.state.type === 'seller' ? (
            <Link to="/account">Account</Link>
          ) : null}
        </Menu.Item>
        <Menu.Item onClick={this.signUserOut.bind(this)}>SignOut</Menu.Item>
      </Menu>
    );
    return (
      <div>
        {this.state.showLogin ? (
          <Login button="user" value={this.loginVal.bind(this)} />
        ) : null}
        {this.state.showSellerSignUp ? (
          <Login
            button="seller"
            value={this.sellerLoginVal.bind(this)}
            showSellerSignUp={this.state.showSellerSignUp}
          />
        ) : null}
        <div className='head-non-resp'>
        <div className="head1 app-primary-dark">
          <Dropdown overlay={menu} style={{ margin: '6px' }}>
            <span>
              English <Icon type="down" />
            </span>
          </Dropdown>
          Help |
        </div>
        <div className="head2 app-primary">
         
          <div className="head3" style={{ maxHeight: 70 }}>
            <div style={{width:'20%'}}> 

            <Link to="/">
              <img
                src={i}
               className='trade-icon'
              />
            </Link>
            </div>
           
            <div className="head22">
             <Search className="search" recieveSearchWord={this.recieveSearchWord} onClickSearchButton={this.onClickSearchButton} />
              <div className="search-button" onClick={this.onClickSearchButton}  >
                <Icon
                  type="arrow-left"
                  className="arrow-anim"
                  style={{ marginRight: 15 }}
                />
                Search
              </div>
              
              {this.state.loggedin ? 
                  this.state.type === 'seller' ? (
                <Dropdown overlay={userDropdownMenu}>
                  <Icon
                    type="user"
                    style={{ color: 'white' }}
                    className="header-avatar"
                  />
                </Dropdown>
              ) : this.state.type === 'user' ? (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <Dropdown overlay={userDropdownMenu}>
                    <Icon
                      type="user"
                      style={{ color: 'white' }}
                      className="header-avatar"
                    />
                  </Dropdown>
                  <div
                    className="common-button app-accent"
                    style={{
                      alignSelf: 'center',
                      marginLeft: 15,
                    }}
                    onClick={this.getSellerLogin.bind(this)}
                  >
                    <Icon type="user" style={{ marginRight: 5 }} />
                    Seller
                  </div>
                </div>
              ) : null : (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <div
                    className="common-button app-accent"
                    style={{
                      alignSelf: 'center',
                      marginLeft: 15,
                    }}
                    onClick={this.getlogin.bind(this)}
                  >
                    <Icon type="shopping-cart" style={{ marginRight: 5 }} />
                    User
                  </div>
                  <div
                    className="common-button app-accent"
                    style={{
                      alignSelf: 'center',
                      marginLeft: 15,
                    }}
                    onClick={this.getSellerLogin.bind(this)}
                  >
                    <Icon type="user" style={{ marginRight: 5 }} />
                    Seller
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        </div>

         <div className="head-resp">
                  <div className='resp-top-bar app-primary-dark'>
          Help |
                  <Dropdown overlay={menu} style={{ margin: '6px' }}>
            <span>
              English <Icon type="down" />
            </span>
          </Dropdown>
                  </div>
                {this.state.showSearch ? 
                <div className='resp-search-wrappers app-primary-dark'>
              <Search recieveSearchWord={this.recieveSearchWord} onClickSearchButton={this.onClickSearchButton} />
              <div className="search-button-resp" onClick={this.onClickSearchButton}  >
                <Icon
                  type="arrow-left"
                  className="arrow-anim"
                  style={{ marginRight: 5 }}
                  
                />
                Search
              </div>
              <Icon type="close" style={{marign:10}} onClick={this.showSearchFun}/>
                </div>
               :  <div className='app-primary header-resp'>
                  <Dropdown overlay={menuforham}>
            <div className="hamburger">
              <span className="hamSpan" />
              <span className="hamSpan" />
              <span className="hamSpan" />
            </div>
          </Dropdown>
                  <div style={{width:'20%'}}> 
                        <Link to="/">
                          <img
                            src={i}
                          className='trade-icon'
                          />
                        </Link>
                        </div>
                <img src={search} className='resp-search-icon' onClick={this.showSearchFun} />
           </div>
                        }
              
              </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapActionsToProps = {
  AuthStateAction: AuthStateAction,
  SignOut: SignOut,
};
export default withRouter(connect(mapStateToProps, mapActionsToProps)(Header));
