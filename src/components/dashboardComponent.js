import React, { Component } from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export default function DashboardComponent(props) {
    const { onLogoutClick } = props;
    return(
      <Container>
        <Image
        src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
        width = {75}
        height = {85}
        rounded
        />
        <br />
        <br />
        <h1>Dashboard</h1>
        <br />
        <br />
        <Card style={{ width: '20rem' }}>
          <Card.Img
          variant="top"
          src="https://www.languagescanada.ca/web/default/files/public/public/london%20logo.gif"
          width = {25}
          height = {110}
          />
          <Card.Body>
            <Card.Title>Student List</Card.Title>
            <Card.Text>
              Under this section, you will see current student database, include student name, student number,
              email address, address, status in Canada, etc.
            </Card.Text>
            <div className="mb-1">
              <Button variant="outline-primary"><Link to="/student-list">View Student List</Link></Button>
            </div>
          </Card.Body>
        </Card>
        <br />
        <br />
        <Button variant="primary" type="submit" onClick={(event)=>onLogoutClick(event) }>
        Logout
        </Button>{' '}
      </Container>
    )
  }
