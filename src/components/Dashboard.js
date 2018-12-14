import React, { Component } from 'react';
import {  Row, Col } from 'reactstrap';

class Dashboard extends Component {
  render() {
    return (
        <Row className="mt-5">
            <Col md={{ size: 10, offset: 1 }}>
                <h1>Dashboard</h1>
            </Col>
        </Row>
    );
  }
}

export default Dashboard;