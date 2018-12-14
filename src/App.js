import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import {  Container } from 'reactstrap';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false
    }
  }

  render() {
    return (
      <Container fluid>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => {
                        const isLogin = sessionStorage.isLogin;
                        if(isLogin){
                            return <Dashboard/>
                        } else {
                            return <Redirect to="/login"/>
                        }
                    }}/>
              <Route path='/login' component={Login}/>
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
      </Container>
    );
  }
}

export default App;
