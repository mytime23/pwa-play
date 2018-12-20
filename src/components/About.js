import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Layout from '../components/Layout';
import {PlayContext, PlayProvider} from '../Providers';
 
class Info extends Component {
     static contextType = PlayContext; //React 16.6 support

    toggle = () => {
        this.props.toggle();
    }
    render() {
        let props = this.props;
        let { color, title}  = this.context;
        return(
            <div>
                <h1>PWA APP About Info 2</h1>
                <Button 
                   {...props}
                  color={color} onClick={this.toggle}>{title}</Button>
            </div>
        )
    }
}

class List extends Component {
   render() {
       return(
           <PlayContext.Consumer>
            { (context) => (
                <h1>This is Title List {context.title}</h1>
            )}
           </PlayContext.Consumer>
       )
   }
}

class About extends Component {
  constructor(props) {
      super(props);
      this.state = {
            title: ''
      }
  }



  toggle = () => {
    this.setState({
        title: 'context'
    });
  }

 handleClick = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('isLogin');
    //直接重新整理
    window.location.reload();
 }
  render() {
    return (
        <PlayProvider>
          <Layout>
            <Container fluid>
                <Row className="mt-5">
                    <Col md={{ size: 10, offset: 1 }}>
                        <h1>About</h1>
                        <Button color="success">About {this.state.title}</Button>
                        <Info toggle={this.toggle} />
                        <List />
                    </Col>
                </Row>
            </Container>
        </Layout>
        </PlayProvider>
    );
  }
}

export default About;