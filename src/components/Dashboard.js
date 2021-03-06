import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Layout from '../components/Layout';
import { PlayProvider} from '../Providers';

class Dashboard extends Component {
  render() {
    return (
      <PlayProvider>
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
      </PlayProvider>

    );
  }
}

export default Dashboard;