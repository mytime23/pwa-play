import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Container, Card, CardHeader, CardBody, CardFooter, Row, Col, Form,
  FormGroup, Label, Input, Alert,
  Button,
} from 'reactstrap';
import logo from '../logo.svg';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      message: '',
      isLogin: false
    }
  }

  handleChangeEmail = (e) => {
    this.setState({
      email : e.target.value
    })
  }
 
  handleChangePassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleClick = (event) => {
    event.preventDefault();

    if(this.state.email === '') {
      this.setState({ message: "Please input Email !"});      
    }

    if(this.state.password === '') {
      this.setState({ message : "Please input Password !"});
    }

    if(this.state.email === 'tim' && this.state.password === 'tim') {
        sessionStorage.email = this.state.email;
        sessionStorage.password = this.state.password;
        sessionStorage.isLogin = true;
        this.setState({ message : "", isLogin: true});
        this.props.history.push("/");

    }else {
        return this.setState({ message : "Eamil or Password is Error !"});
    }

  }

//   async saveSession() {
//     sessionStorage.email = this.state.email;
//     sessionStorage.password = this.state.password;
//     // this.props.history.push("/");
//   }

  render() {
    let email = this.state.email;
    let password = this.state.password;
    const message = (this.state.message ==='')
          ?""
          :<Alert color="danger">{this.state.message}</Alert>;
    console.log('isLogin : ' + this.state.isLogin);
    return (
      <Container fluid>
      <Row className="mt-5">
          <Col md={{ size: 4, offset: 4 }}>
              <Card>
                  <CardHeader><h3><img src={logo} className="App-logo" alt="logo" />Sign In</h3></CardHeader>
                  <CardBody>
                      <Form className="form">            
                          <FormGroup>
                              <Label>Email</Label>
                              <Input
                                  type="email"
                                  name="email"
                                  id="exampleEmail"
                                  value= {email}
                                  onChange={this.handleChangeEmail}
                              />
                          </FormGroup>
                          <FormGroup>
                              <Label for="examplePassword">Password</Label>
                              <Input
                                  type="password"
                                  name="password"
                                  id="examplePassword"
                                  value={password}
                                  onChange={this.handleChangePassword} 
                              />
                          </FormGroup>                          
                          <Button className="" onClick={this.handleClick}>Submit</Button>
                      </Form>
                  </CardBody>
                  <CardFooter>
                     {message}
                  </CardFooter>
              </Card>
          </Col>
      </Row>
      </Container>
    );
  }
}

export default Login;