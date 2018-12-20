import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Layout from '../components/Layout';
import { TitleProvider} from '../Providers';

class Dashboard extends Component {

 handleClick = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('isLogin');
    //直接重新整理
    window.location.reload();
 }
  render() {
    return (
      <TitleProvider>
        <Layout>
          <Container fluid>
            <Row className="mt-5">
              <Col md={{ size: 10, offset: 1 }}>
                <h1>Dashboard</h1>
                <Button color="success">Dashboard</Button>
              </Col>
            </Row>
          </Container>
        </Layout>
      </TitleProvider>

    );
  }
}

export default Dashboard;