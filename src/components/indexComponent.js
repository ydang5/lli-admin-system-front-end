import React, {Component} from 'react';

import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button"

export default function IndexComponent(props){
  return(
    <div>
      <Container>
        <Row>
          <Col>
          </Col>
          <Col md="auto">
            <h2>London Language Institute Admin Portal</h2>
          </Col>
          <Col>
          </Col>
          <br />
          <br />
        </Row>
        <Row>
        <Col>
        </Col>
        <Col md="auto">
        </Col>
        <Col>
        </Col>
        </Row>
        <br />
        <br />
        <Container>
          <Row>
            <Col>
            </Col>
            <Col md="auto">
              <Image
              src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
              width = {300}
              height = {351}
              rounded
              />
            </Col>
            <Col>
            </Col>
          </Row>
        </Container>
          <br />
          <br />
          <br />
          <br />
          <div className="mb-2">
            <Button variant="outline-primary"><Link to="/register">Register</Link></Button>{' '}
            <Button variant="outline-primary"><Link to="/login">Login</Link></Button>
        </div>
      </Container>
    </div>
  )
}
