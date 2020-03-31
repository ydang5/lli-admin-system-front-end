import React, {Component} from 'react';

import { BrowserRouter as Router, Route, withRouter, Switch, Link } from "react-router-dom";


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function LoginComponent(props){

  const {
    email, password,
    onEmailChange, onPasswordChange, onClick
  } = props

  return(
    <Container>
      <Image
      src="https://www.llinstitute.com/wp-content/uploads/2018/03/logo-footer.png"
      width = {75}
      height = {85}
      rounded
      />
      <Form>
        <h2>Login</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
          type="email"
          placeholder="Enter email"
          value = {email}
          onChange = {(event)=>onEmailChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
          type="password"
          placeholder="Password"
          value = {password}
          onChange = {(event)=>onPasswordChange(event)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(event)=>onClick(event) }>
          Submit
        </Button>{' '}
        <Link to="/">Back</Link>
      </Form>
    </Container>
  )
}
