import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
 } from 'reactstrap';
// import '../App.css';
import {PlayContext} from '../Providers';


class Layout extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          isLogin: false
        };
    }

    static contextType = PlayContext; //React 16.6 support

    componentDidMount() {
      let account = sessionStorage.email;
      if(account) {
          this.setState({
              account: account,
              isLogin: true
          })
      }else {
          // this.props.history.push("/login"); 
          this.setState({
              account: '登入'
          })
      }
  }

    // componentDidUpdate(prevProps, prevState) {
    //     let isLogin = sessionStorage.isLogin;
    //     if(isLogin) {
    //         this.props.history.push("/");
    //         console.log(isLogin); 
    //     }else {
    //         this.props.history.push("/"); 
    //         console.log(isLogin); 
    //     }
    //   }
    
    loginOutClick = () => {
      sessionStorage.removeItem('email');
      sessionStorage.removeItem('password');
      sessionStorage.removeItem('isLogin');
      //直接重新整理
      window.location.reload();
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

  render() {
    // let isLogin = sessionStorage.isLogin;
    // let { isLogin }  = this.context;
    // console.log('登入狀態 : ' , isLogin);

    return (
        <div>
          <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">PWA-APP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/dashboard">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>

              </NavItem>
              <NavItem>
                {'  '}
                <Button outline color="primary" onClick={this.loginOutClick}>
                <PlayContext.Consumer>
                  { (context) => (
                    <span>{context.account}</span>
                  )}
                </PlayContext.Consumer> {'  '}
                </Button>
              </NavItem>  
            </Nav>
          </Collapse>
        </Navbar>
            <div className="main">
                {this.props.children}
            </div>
        </div>

    );
  }
}

export default Layout;