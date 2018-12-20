import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
// import {  Container } from 'reactstrap';
import Header from './components/Layout/Header';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import About from './components/About';
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
              <Route path='/about' component={About}/>
              <Redirect to="/" />
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
