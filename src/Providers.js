import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export const TitleContext = React.createContext(); // React 16.3 support

export class TitleProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'primary',
            title: 'Context',
            account: '',
            isLogin: sessionStorage.isLogin
        }
    }

    componentDidMount() {
        let account = sessionStorage.email;
        if(account) {
            this.setState({
                account: account + '  登出',
                isLogin: true
            })
        }else {
            // this.props.history.push("/login"); 
            // this.setState({
            //     account: '登入'
            // })
            return <Redirect to="/login"/>
        }
    }
   
    render() {
        console.log('登入狀態 : ' , this.state.isLogin);
        let isLogin = this.state.isLogin;
        if(isLogin){
            return( 
                <TitleContext.Provider value={this.state}>
                    {this.props.children}
                </TitleContext.Provider>)
        } else {
            return <Redirect to="/login"/>
        }
        // return(
        //     <TitleContext.Provider value={this.state}>
        //         {this.props.children}
        //     </TitleContext.Provider>
        // )
    }
}
  
